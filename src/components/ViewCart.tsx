import React from 'react';
import { useCartStore } from '../store/Store';

const ViewCart = () => {
    const { cart, updateItemQuantity, removeFromCart } = useCartStore();
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // PromptPay QR Code details
    const phoneNumber = '0959042353'; // หมายเลขโทรศัพท์ที่เชื่อมกับ PromptPay
    const amount = totalPrice; // จำนวนเงินที่ต้องการจ่าย

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

    const printBill = () => {
        const billContent = `
      =======================================
      ร้านอาหาร proteinDiet24
      เบอร์ติดต่อ: 123-456-7890
      ที่อยู่: 123 ถนนสุขุมวิท กรุงเทพฯ
      =======================================
      รายการสั่งซื้อ
      =======================================
      ${cart.map(item =>
            `${item.name} x ${item.quantity} - ฿${item.price * item.quantity}`).join('\n')}
      
      ---------------------------------------
      รวมทั้งหมด: ฿${totalPrice}
      =======================================
      ขอบคุณที่ใช้บริการ!
    `;

        // สร้างหน้าใหม่สำหรับการพิมพ์บิล
        const printWindow = window.open('', '_blank');
        printWindow?.document.write(`<pre>${billContent}</pre>`);
        printWindow?.document.write('<div>');
        printWindow?.document.write(`<h3>QR Code สำหรับการชำระเงิน</h3>`);

        // ใส่ QR code ในหน้าปริ้น
        printWindow?.document.write(`<div><img src="https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=${generatePromptPayQRCode(phoneNumber, amount)}" alt="PromptPay QR Code" /></div>`);
        printWindow?.document.close();
        printWindow?.print();
    };

    return (
        <div className="container mx-auto p-4 mt-40">
            <h1 className="text-2xl font-bold mb-4">View Cart</h1>

            <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                    <h2 className="text-xl font-bold">รายการสินค้าของคุณ</h2>
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
                                    <td colSpan={5} className="text-center">ไม่มีสินค้าที่ยังไม่ได้ชำระ</td>
                                </tr>
                            ) : (
                                cart.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>
                                            <div className="flex items-center">
                                                <button onClick={() => decreaseQuantity(index)} className="btn btn-sm btn-secondary">-</button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(index)} className="btn btn-sm btn-secondary">+</button>
                                            </div>
                                        </td>
                                        <td>฿{item.price}</td>
                                        <td>฿{item.price * item.quantity}</td>
                                        <td>
                                            <button onClick={() => removeItemFromCart(index)} className="btn btn-sm btn-danger">ลบ</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    <div className="mt-4 text-right">
                        <p className="text-lg font-bold">ยอดรวมทั้งหมด: ฿{totalPrice}</p>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button onClick={printBill} className="btn btn-primary">
                            สร้างบิลและพิมพ์
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCart;
