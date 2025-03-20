import { Link } from "react-router";
const Card = () => {
    return (
        <div className="mx-4 md:mx-auto max-w-6xl">
            <div className="card lg:card-side bg-base-100 shadow-lg flex">
                {/* ✅ ปรับขนาดรูปให้ขยายไปถึงตรงกลาง */}
                <figure className="flex-1 md:w-1/2 h-auto">
                    <img
                        className="w-full h-full object-cover rounded-lg"
                        src="https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/391680987_807465771387015_5880569479808491050_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFTIvWQLiQt7EdbVJIUKZbzvYcGg5zZNqu9hwaDnNk2q3WOxLwHpSLxR16_sojdAtIQk7M_DPsbxKljAHEvpveK&_nc_ohc=ksYjOtAU4x8Q7kNvgHN4vCp&_nc_oc=AdnbgfBnc5AXeA1yhcUd8Etc807vn7ceD4S-t5CpGxrwa-pi3hSf3jDLbhxJThBK-Qk&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=RlakYu1zaHZlDiylfGTQiw&oh=00_AYGHz1bES34rnXGZfU1yWvOYmULkgAQbYq_OLfEGhnVvPg&oe=67E05F77"
                        alt="Album"
                    />
                </figure>
                <div className="relative hero-content text-center text-neutral-950">
                    <div className="max-w-2xl mx-auto my-8">
                        <h1 className="text-7xl font-bold mb-6 text-rose-600">สั่งได้เลย!</h1>
                        <p className="ml-10 py-10 text-2xl text-justify md:text-center mb-6">
                            OAT MIKE STRAWBERRY เจ น้ำตาล 0%
                        </p>
                        <Link to='/Drink'>
                            <button className="btn btn-neutral btn-xl sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                                สั่งซื้อสินค้า
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Card
