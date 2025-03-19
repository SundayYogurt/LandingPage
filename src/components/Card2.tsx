import { useEffect } from "react";
import { useCartStore } from "../store/Store"; // นำเข้า useCartStore
import Swal from "sweetalert2"; // นำเข้า sweetalert2

type CardProps = {
    Image: string;
    name: string;
    price: number;
    p: string;
};

const Card2: React.FC<CardProps> = (props) => {
    const { cart, addToCart } = useCartStore(); // ใช้ hook จาก Zustand store เพื่อเพิ่มสินค้าไปที่ตะกร้า

    // การจัดการเมื่อคลิกปุ่ม "ซื้อเลย"
    const handleBuy = () => {
        const newItem = {
            name: props.name,
            price: props.price,
            quantity: 1, // สมมุติให้เป็น 1
        };

        addToCart(newItem); // เพิ่มสินค้าใหม่ไปที่ตะกร้า

        // แสดง SweetAlert เมื่อเพิ่มสินค้าลงตะกร้า
        Swal.fire({
            title: "สำเร็จ!",
            text: `คุณได้เพิ่ม ${props.name} ราคา ${props.price} บาท ไปยังตะกร้าแล้ว`,
            icon: "success",
            confirmButtonText: "ตกลง",
        });

        console.log(`✅ สั่งซื้อ: ${props.name} | ราคา: ${props.price} บาท`);
    };

    // useEffect สำหรับตรวจสอบ cart เมื่อมีการเปลี่ยนแปลง
    useEffect(() => {
        if (cart.length > 0) {
            cart.forEach(item => {
                console.log(`ชื่อสินค้า: ${item.name}, ราคา: ${item.price}, จำนวน: ${item.quantity}`);
            });
        }
    }, [cart]);

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src={props.Image} alt={props.name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <h2 className="card-title text-rose-500">ราคา {props.price} บาท</h2>
                    <p>{props.p}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleBuy} className="btn bg-orange-600 text-amber-50">
                            ซื้อเลย
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card2;
