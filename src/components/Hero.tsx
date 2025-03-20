import { Link } from 'react-scroll'; // Import จาก react-scroll

const Hero = () => {
    return (
        <div className="relative hero bg-base-200 min-h-screen">
            {/* ✅ รูปเต็มพื้นที่ Hero และเบลอได้ */}
            <div className="absolute inset-0">
                <img
                    src="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/399649681_830135749120017_6663757057672405014_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGgWpWLT-K5boA85HMpYvu2GCA6Yzk_59oYIDpjOT_n2t2guOiqouE4uOSVsNvlN7w9uYnmuu9zYHzEEx111ZcQ&_nc_ohc=F9uLCWkfRsIQ7kNvgGov06b&_nc_oc=AdkSZcFW_-AmcJikE-ksIbpOswIvg9AL1rnnhhk4-HVpg73bNJyUSXs1bSp9493lIGk&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=b4hMJbp6j6CEblfc1b0RGw&oh=00_AYHaaGFZSjomTj3KsuKvr8z3giTboTHJ-2h_pt4gzEMK5g&oe=67E05833"
                    alt="random"
                    className="w-full h-full object-cover blur-md"
                />
                {/* ✅ เพิ่ม Overlay เพื่อให้ข้อความอ่านง่ายขึ้น */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* ✅ Hero Content */}
            <div className="relative hero-content text-center text-white">
                <div className="max-w-2xl mx-auto my-8">
                    <h1 className="text-7xl font-bold mb-6">อาหารเพื่อสุขภาพ</h1>
                    <p className="py-10 text-xl text-justify md:text-center mb-6">
                        ร้านอาหารเพื่อสุขภาพ ที่มีเมนูอาหารที่อร่อย และเพื่อสุขภาพของคุณ
                        ลองเลย วันนี้
                    </p>
                    {/* ใช้ Link จาก react-scroll */}
                    <Link
                        to="order"  // เลื่อนไปยังส่วนที่มี id="order"
                        smooth={true} // เลื่อนแบบนุ่มนวล
                        duration={500} // ระยะเวลาในการเลื่อน
                    >
                        <button className="btn btn-neutral btn-xl sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                            สั่งอาหาร
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
