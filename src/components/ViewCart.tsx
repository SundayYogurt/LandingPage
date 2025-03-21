import { useCartStore } from '../store/Store';
import { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Receipt from './Receipt';

const PROMPTPAY_NUMBER = '0959042353';

const ViewCart = () => {
    const { cart, updateItemQuantity, removeFromCart } = useCartStore();
    const [showReceipt, setShowReceipt] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // ฟังก์ชันการเพิ่มจำนวนสินค้า
    const increaseQuantity = (index: number) => {
        updateItemQuantity(index, cart[index].quantity + 1);
    };

    // ฟังก์ชันการลดจำนวนสินค้า
    const decreaseQuantity = (index: number) => {
        if (cart[index].quantity > 1) {
            updateItemQuantity(index, cart[index].quantity - 1);
        }
    };

    // ฟังก์ชันการลบสินค้า
    const removeItemFromCart = (index: number) => {
        removeFromCart(index);
    };

    const generateReceipt = () => {
        setIsLoading(true);
        setTimeout(() => {
            setShowReceipt(true);
            setIsLoading(false);
        }, 500);
    };

    // ข้อมูลสำหรับใบเสร็จ
    const receiptData = {
        orderNumber: `INV-${Date.now()}`,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        promptPayId: PROMPTPAY_NUMBER
    };

    return (
        <div className="container mx-auto p-4 mt-40">
            {isLoading ? (
                <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
                    <div className="loading loading-spinner loading-lg"></div>
                    <span className="ml-2">กำลังสร้างใบเสร็จ...</span>
                </div>
            ) : !showReceipt ? (
                <>
                    <h1 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h1>

                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                            <h2 className="text-xl font-bold">รายการสินค้าของคุณ</h2>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>ชื่อสินค้า</th>
                                            <th>จำนวน</th>
                                            <th>ราคา</th>
                                            <th>รวม</th>
                                            <th>การจัดการ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="text-center">ไม่มีสินค้าในตะกร้า</td>
                                            </tr>
                                        ) : (
                                            cart.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>
                                                        <div className="flex items-center space-x-2">
                                                            <button
                                                                onClick={() => decreaseQuantity(index)}
                                                                className="btn btn-sm btn-outline"
                                                            >
                                                                -
                                                            </button>
                                                            <span className="mx-2">{item.quantity}</span>
                                                            <button
                                                                onClick={() => increaseQuantity(index)}
                                                                className="btn btn-sm btn-outline"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td>฿{item.price.toFixed(2)}</td>
                                                    <td>฿{(item.price * item.quantity).toFixed(2)}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeItemFromCart(index)}
                                                            className="btn btn-sm btn-error"
                                                        >
                                                            ลบ
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-4 text-right">
                                <p className="text-lg font-bold">ยอดรวมทั้งหมด: ฿{totalPrice.toFixed(2)}</p>
                            </div>

                            <div className="mt-4 flex justify-end gap-2">
                                <button
                                    onClick={generateReceipt}
                                    className="btn btn-primary"
                                    disabled={cart.length === 0}
                                >
                                    สร้างใบเสร็จและ QR Code
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="fixed inset-0 bg-white z-50">
                    <div className="absolute top-4 right-4 flex gap-2">
                        <button
                            onClick={() => setShowReceipt(false)}
                            className="btn btn-circle btn-ghost"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="w-full h-screen">
                        <PDFViewer style={{ width: '100%', height: '100%' }}>
                            <Receipt {...receiptData} />
                        </PDFViewer>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewCart;
