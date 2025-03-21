import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { QRCodeSVG } from 'qrcode.react';
import { useRef, useEffect, useState } from 'react';
import { generatePromptPayQRPayload } from '../utils/promptpay';

// Register fonts
Font.register({
    family: 'Sarabun',
    src: 'https://cdn.jsdelivr.net/npm/@fontsource/sarabun@4.5.0/files/sarabun-all-400-normal.woff'
});

Font.register({
    family: 'Sarabun-Bold',
    src: 'https://cdn.jsdelivr.net/npm/@fontsource/sarabun@4.5.0/files/sarabun-all-700-normal.woff'
});

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        padding: 30,
        fontFamily: 'Sarabun',
        fontSize: 14,
    },
    header: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#333333',
        fontFamily: 'Sarabun-Bold',
    },
    section: {
        margin: 10,
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        paddingVertical: 5,
        marginVertical: 5,
        alignItems: 'center',
    },
    column: {
        flex: 1,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        color: '#666666',
    },
    total: {
        marginTop: 20,
        borderTopWidth: 2,
        borderTopColor: '#333333',
        paddingTop: 10,
    },
    totalText: {
        fontSize: 16,
        textAlign: 'right',
        color: '#333333',
        fontWeight: 'bold',
    },
    qrSection: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    qrCode: {
        width: 150,
        height: 150,
        marginTop: 10,
        marginBottom: 10,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 30,
        right: 30,
        textAlign: 'center',
        color: '#666666',
        fontSize: 10,
        borderTopWidth: 1,
        borderTopColor: '#999999',
        paddingTop: 10,
    },
    itemRow: {
        flexDirection: 'row',
        paddingVertical: 5,
    },
    itemName: {
        flex: 2,
        fontSize: 12,
        color: '#333333',
    },
    itemQuantity: {
        flex: 1,
        fontSize: 12,
        color: '#666666',
        textAlign: 'center',
    },
    itemPrice: {
        flex: 1,
        fontSize: 12,
        color: '#666666',
        textAlign: 'right',
    },
});

interface ReceiptProps {
    orderNumber: string;
    date: string;
    items: Array<{
        name: string;
        quantity: number;
        price: number;
    }>;
    promptPayId: string;
}

// QR Code Generator Component
const QRCodeGenerator = ({ url, getQRImage }: { url: string; getQRImage: (dataUrl: string) => void }) => {
    const qrRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (qrRef.current) {
            const svg = qrRef.current;
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement('canvas');
            canvas.width = 300;
            canvas.height = 300;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                const img = document.createElement('img') as HTMLImageElement;
                img.onload = () => {
                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    try {
                        const dataUrl = canvas.toDataURL('image/png');
                        getQRImage(dataUrl);
                    } catch (error) {
                        console.error('Error generating QR code:', error);
                    }
                };
                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
            }
        }
    }, [url, getQRImage]);

    return (
        <div style={{ position: 'absolute', left: '-9999px' }}>
            <QRCodeSVG
                ref={qrRef}
                value={url}
                size={300}
                level="L"
                includeMargin={true}
                bgColor="#FFFFFF"
                fgColor="#000000"
            />
        </div>
    );
};

// Receipt Component
const Receipt = ({ orderNumber, date, items, promptPayId }: ReceiptProps) => {
    const [qrImage, setQRImage] = useState<string>('');

    // Calculate total from items
    const total = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const promptPayQRPayload = generatePromptPayQRPayload(promptPayId, total);

    useEffect(() => {
        const tempQRCode = document.createElement('div');
        tempQRCode.style.position = 'absolute';
        tempQRCode.style.left = '-9999px';
        document.body.appendChild(tempQRCode);

        const root = document.createElement('div');
        tempQRCode.appendChild(root);

        const cleanup = () => {
            if (tempQRCode && document.body.contains(tempQRCode)) {
                document.body.removeChild(tempQRCode);
            }
        };

        const renderQR = async () => {
            try {
                const ReactDOM = await import('react-dom/client');
                const reactRoot = ReactDOM.createRoot(root);
                reactRoot.render(<QRCodeGenerator url={promptPayQRPayload} getQRImage={setQRImage} />);
            } catch (error) {
                console.error('Error rendering QR code:', error);
            }
        };

        renderQR();
        return cleanup;
    }, [promptPayQRPayload]);

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>ใบเสร็จรับเงิน</Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.title}>เลขที่ใบเสร็จ:</Text>
                            <Text style={styles.text}>{orderNumber}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.title}>วันที่:</Text>
                            <Text style={styles.text}>{date}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.title}>รายการสินค้า:</Text>
                    <View style={styles.row}>
                        <Text style={[styles.itemName, { color: '#666666', fontSize: 10 }]}>รายการ</Text>
                        <Text style={[styles.itemQuantity, { color: '#666666', fontSize: 10 }]}>จำนวน</Text>
                        <Text style={[styles.itemPrice, { color: '#666666', fontSize: 10 }]}>ราคา</Text>
                        <Text style={[styles.itemPrice, { color: '#666666', fontSize: 10 }]}>รวม</Text>
                    </View>
                    {items.map((item, index) => (
                        <View key={index} style={styles.itemRow}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemQuantity}>{item.quantity}</Text>
                            <Text style={styles.itemPrice}>฿{item.price.toFixed(2)}</Text>
                            <Text style={styles.itemPrice}>฿{(item.quantity * item.price).toFixed(2)}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.total}>
                    <Text style={styles.totalText}>
                        ยอดรวมทั้งหมด: ฿{total.toFixed(2)}
                    </Text>
                </View>

                <View style={styles.qrSection}>
                    <Text style={styles.title}>สแกนเพื่อชำระเงินผ่าน PromptPay</Text>
                    <Text style={styles.text}>หมายเลข PromptPay: {promptPayId}</Text>
                    {qrImage && (
                        <View style={{ marginTop: 10, marginBottom: 10 }}>
                            <Image src={qrImage} style={styles.qrCode} />
                        </View>
                    )}
                </View>

                <Text style={styles.footer}>
                    ขอบคุณที่ใช้บริการ
                </Text>
            </Page>
        </Document>
    );
};

export default Receipt; 