import { useEffect } from "react";
import { useCartStore } from "../store/Store";
import Swal from "sweetalert2";

type Option = {
    label: string;
    price: number;
};

type More = {
    label: string;
    price: number;
};

type CardProps = {
    Image: string;
    name: string;
    price: number;
    p: string;
    options: Option[]; // รับตัวเลือกเป็น Props
    mores: More[];
};

const Card2: React.FC<CardProps> = ({ Image, name, price, p, options, mores }) => {
    const { cart, addToCart } = useCartStore();

    const handleBuy = async () => {
        // First prompt: Select food type
        const { value: optionValue } = await Swal.fire({
            title: "เลือกประเภทอาหาร",
            input: "radio",
            inputOptions: options.reduce((acc, option) => {
                acc[option.label] = `${option.label} (+${option.price} บาท)`;
                return acc;
            }, {} as Record<string, string>),
            inputValidator: (value) => {
                if (!value) return "กรุณาเลือกประเภทอาหารก่อนทำการสั่งซื้อ!";
            },
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
        });

        // If no option selected, return
        if (!optionValue) return;

        // Second prompt: Select additional items (checkbox)
        const { value: moreValues } = await Swal.fire({
            title: "เลือกเพิ่มเติม",
            input: "radio",
            inputOptions: mores.reduce((acc, more) => {
                acc[more.label] = `${more.label} (+${more.price} บาท)`;
                return acc;
            }, {} as Record<string, string>),
            inputValidator: (value) => {
                if (!value || value.length === 0) return "กรุณาเลือกตัวเลือกเพิ่มเติม!";
            },
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
        });

        // Handle if moreValues is not an array, convert it to array
        const selectedMoreValues = Array.isArray(moreValues) ? moreValues : moreValues ? [moreValues] : [];

        console.log("Selected moreValues (array format):", selectedMoreValues);  // Debug log

        // ค้นหาตัวเลือกที่ถูกเลือกจาก options
        const selectedOption = options.find(opt => opt.label === optionValue);
        let finalPrice = price + (selectedOption?.price || 0);

        // คำนวณราคาเพิ่มเติมจากตัวเลือกที่เลือก
        if (selectedMoreValues.length > 0) {
            selectedMoreValues.forEach((moreLabel: string) => {
                const more = mores.find(more => more.label === moreLabel);
                if (more) {
                    finalPrice += more.price;
                }
            });
        }

        // เพิ่มสินค้าไปยังตะกร้า
        const newItem = {
            name: `${name} (${selectedOption?.label}${selectedMoreValues.length ? ` + ${selectedMoreValues.join(', ')}` : ''})`,
            price: finalPrice,
            quantity: 1,
        };

        addToCart(newItem);

        // แสดงข้อความสำเร็จ
        Swal.fire({
            title: "สำเร็จ!",
            text: `คุณได้เพิ่ม ${newItem.name} ราคา ${finalPrice} บาท ไปยังตะกร้าแล้ว`,
            icon: "success",
            confirmButtonText: "ตกลง",
        });

        console.log(`✅ สั่งซื้อ: ${newItem.name} | ราคา: ${finalPrice} บาท`);
    };



    useEffect(() => {
        if (cart.length > 0) {
            cart.forEach(item => {
                console.log(`ชื่อสินค้า: ${item.name}, ราคา: ${item.price}, จำนวน: ${item.quantity}`);
            });
        }
    }, [cart]);

    return (
        <div className="card bg-base-100 w-96 h-150 shadow-md"> {/* ขนาดการ์ดคงที่ */}
            <figure className="h-full w-full overflow-hidden"> {/* ความสูงของรูปเพิ่มขึ้นจาก h-60 เป็น h-72 */}
                <img src={Image} alt={name} className="w-full h-full object-cover" /> {/* รูปจะเต็มพื้นที่การ์ด */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title text-rose-500">ราคา {price} บาท</h2>
                <p>{p}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleBuy} className="btn bg-orange-600 text-amber-50 hover:bg-orange-700">
                        ซื้อเลย
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Card2;
