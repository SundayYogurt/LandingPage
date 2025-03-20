import { useState } from 'react'
import Card2 from '../components/Card2'
import Search from '../components/Search'

const Order = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const foodItems = [
        {
            image: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/409211484_850193400447585_393001200283402329_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGGUVm-5DLZb4x_ovzzNwzRCogSpPx9NuUKiBKk_H025VNROpfgkSOy3krm9EUtHuUl4n9jYhwWhlhdvXEicIBm&_nc_ohc=EliIm5AoT-cQ7kNvgHK_iWE&_nc_oc=Adkj2jj6F1k3r_y5yZxB0sQmsBqh2f4Liy662PCWQN-90_eW6t7v5tXim4qcrq7q7Fo&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=Pm0uLy6P0tBJtzG1rPdLiQ&oh=00_AYEQBgzmD_v80YNM2P_RkTqKhVMRoKbxEik1NEydkJKtmQ&oe=67E1D610",
            name: "กะเพราหมูสับ ไข่ข้นราดข้าว",
            price: 65,
            description: "กะเพราหมูสับ ไข่ข้นราดข้าว อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง",
            options: [
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
            ],
            mores: [
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
            ]
        },
        {
            image: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/409734229_850193270447598_1476593874907422644_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEAbIXSZ3Qj4QavyzxnipFf7SbksVFYjOftJuSxUViM58g-roaprpQRjnKXITMozPEuNcCJ8doUW_RTfupqXycq&_nc_ohc=JtSEabknNW4Q7kNvgFNBzkQ&_nc_oc=Admjyg-YH-Yzm37-hEyCc2AjivyO9-KfZJcSje8Zl5pFyvj0Knom3V0B_Cy9dk2F90o&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=RrD7VZzmrV3CgLuXXiLUqg&oh=00_AYFJxuHeknqVqbjrUzhREEIxXVozPN_oUGVZURq7fQmyeA&oe=67E1DAF7",
            name: "หมูคั่วกากเจียว",
            price: 65,
            description: "หมูคั่วกากเจียว อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง จัดเลยวันนี้",
            options: [
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
            ],
            mores: [
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
            ]
        },
        {
            image: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/441932704_973597561440501_5994024219817889047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHhOIigPsC5jLyFPfGhyxfxhEGRXidlLeyEQZFeJ2Ut7H1vmIsoLswpNovG2tYXrhQtaYlXUIlPexYsmSm4-CVr&_nc_ohc=7wbbVFC6UkoQ7kNvgEbDLUM&_nc_oc=AdnUEQ_kpiz0wwerk3ivoIuNdTiaW6h7PEK67vuKYZKRXRATy7fsQ7OvP1gmSyCN_hY&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=djL4QakhIG39ELIXGjdSvA&oh=00_AYHqXINAqFXYdXnKh7xPQMrJxEZXYj4tAsrwnT7Uoe8nYw&oe=67E1F5F9",
            name: "มาม่าคั่วกะเพราหมูสับ พริกขี้หนูสวน",
            price: 65,
            description: "มาม่าคั่วกะเพราหมูสับ พริกขี้หนูสวน อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง",
            options: [
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
            ],
            mores: [
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
            ]
        },
        {
            image: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/441931262_973597568107167_8809083280256356902_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGcZgqNZVw3gzFL9WVm_B6OC6EsjTU6JY4LoSyNNToltrBrsxTvZ8vvizEdfQpkAV75-x61pO0g5K9nTsiM0jG&_nc_ohc=swrpsvyYtVIQ7kNvgEFP3eZ&_nc_oc=AdkovcCspLEUMlD5Fp_0VHMAuW1osr1uETv3Ss7PByCN4xXOx-OemsTQ4ExUH_8z6sM&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=Csui0_7wkPZ2C5OwrWR2Jg&oh=00_AYFBTcnJlKsql9NhdM4fKWggu-XzFOMw_j5cNNELkt5z1w&oe=67E09941",
            name: "สั่งเลย 2 จาน แถม 1 จาน",
            price: 65,
            description: "สั่งเลย 2 จาน แถม 1 จาน อร่อย ๆ สูตรอาหารเด็ด ๆ ที่คุณต้องลอง",
            options: [
                { label: "พิเศษ", price: 20 },
                { label: "ธรรมดา", price: 0 }
            ],
            mores: [
                { label: "หมูสับ", price: 0 },
                { label: "หมูกรอบ", price: 0 },
                { label: "ไก่", price: 0 },
                { label: "เนื้อ", price: 20 },
                { label: "กุ้ง", price: 10 }
            ]
        }
    ]

    const filteredItems = foodItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div>
            <div className="my-25">
                <h1 className="my-20 text-3xl font-bold text-center">ข้าว อร่อยๆ</h1>

                {/* เรียกใช้งาน Search Component */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                <div className="flex flex-wrap justify-center gap-4" id="card2">
                    {filteredItems.map((item, index) => (
                        <Card2
                            key={index}
                            Image={item.image}
                            name={item.name}
                            price={item.price}
                            p={item.description}
                            options={item.options}
                            mores={item.mores}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Order
