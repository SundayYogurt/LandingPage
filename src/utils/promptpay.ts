// EMV QR Code Specification for PromptPay
// Reference: https://www.emvco.com/wp-content/uploads/documents/EMVCo-Merchant-Presented-QR-Specification-v1-1.pdf

const generatePayload = (phoneNumber: string, amount: number): string => {
    // Remove any non-numeric characters from phone number
    const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
    
    // Format phone number to include 66 prefix
    const promptpayNumber = cleanPhoneNumber.startsWith('0') 
        ? `66${cleanPhoneNumber.slice(1)}` 
        : cleanPhoneNumber;

    // Format amount with 2 decimal places
    const formattedAmount = amount.toFixed(2);

    // Build payload components
    const payload = [
        "00020101", // ID + PayloadFormatIndicator
        "010211", // PayloadFormatIndicator
        "29", // Merchant Account Information
        "40", // Length of Merchant Account Information
        "0016A000000677010111", // AID
        "0115", // Phone number length indicator
        promptpayNumber, // Phone number with country code
        "5303764", // Transaction Currency (764 for THB)
        "54" + formattedAmount.length.toString().padStart(2, '0') + formattedAmount, // Amount
        "5802TH", // Country Code
        "6304" // CRC (will be calculated later)
    ].join('');

    // Calculate CRC16
    const crc = calculateCRC16(payload);
    
    return payload + crc.toString(16).toUpperCase().padStart(4, '0');
};

// CRC16-CCITT (0xFFFF)
const calculateCRC16 = (payload: string): number => {
    let crc = 0xFFFF;
    const polynomial = 0x1021;

    for (let i = 0; i < payload.length; i++) {
        const char = payload.charCodeAt(i);
        crc ^= (char << 8);
        for (let j = 0; j < 8; j++) {
            if (crc & 0x8000) {
                crc = ((crc << 1) ^ polynomial) & 0xFFFF;
            } else {
                crc = (crc << 1) & 0xFFFF;
            }
        }
    }

    return crc;
};

/**
 * สร้าง URL สำหรับ PromptPay QR Code
 * @param phoneNumber เบอร์โทรศัพท์ PromptPay
 * @param amount จำนวนเงิน
 * @returns QR Code payload string
 */
export const generatePromptPayQRPayload = (phoneNumber: string, amount: number): string => {
    return generatePayload(phoneNumber, amount);
}; 