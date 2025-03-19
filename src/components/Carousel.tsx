import React, { useState, useEffect } from 'react';

interface Slide {
    src: string;
    alt: string;
}

const slides: Slide[] = [
    {
        src: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/419760639_873950401405218_2777774327407977650_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGxDCXjnQx1CmtIyhDfjNwCOvakEnnPKpQ69qQSec8qlO55FlepklNspVF6KCR6FsePHD9Q-EtBVkaW4Ee8hWfE&_nc_ohc=9cljdSeJdv0Q7kNvgGN9TmA&_nc_oc=AdlhD8n0Ewp0_9y7_u_p1-hAP8YnhlaNvAjeZzs2DuJ07Y4L3szdXeqcFeepdQ2Mh98&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=FA_M66G1VR-126NDanV6Og&oh=00_AYG8VAc8i87lWva3Z39S5xuvfI5zz5SW_cvkk_LPU0wLdQ&oe=67E09A27",
        alt: "Slide 1",
    },
    {
        src: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/419744593_873950394738552_599741157877165207_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFdxgI2ulDt9Nz_8aObZ5CtAM71Rv2oVoIAzvVG_ahWgpil42yRdkyp3SPHvYb-lDawq8yRbW4HDBrGWUA8P_Kw&_nc_ohc=KXF5CrBx-0gQ7kNvgGHQMS5&_nc_oc=Adm41qhXqPTbVLM_exo9MuiI-fWZaRRwJIWPmJEdvLk0csFb0VkE3NixpYBRLsKz7Oo&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=UIMpm4vEO08tiz9x41QU0w&oh=00_AYG3n_RpaWOQkSrsTaQaj38rkDDRVfTQBvc65yVYGzgjmQ&oe=67E074BD",
        alt: "Slide 2",
    },
    {
        src: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/419814182_873950364738555_6529437528106062717_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHLszGrLVQp1DzjZvPNX-Le2f_N929wXTnZ_833b3BdOSz19Z7GMSantNkm8EWqWuTu6FGpSLU9iLIRsi79oM-P&_nc_ohc=41yXagMSgyEQ7kNvgEpUCvJ&_nc_oc=AdmlUIMp-pLq-r3tQzsCIYguK4rkGiZ0IF8fvSqym7k_8lxgaLUHR3x5-3pUf-5csn4&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=iB90gmHPn2T6AXAeuGA_Ig&oh=00_AYHYqYgpcFXs-fqYwGBrzbTj5ZHEN6TfxIisU7lcezBx2A&oe=67E08D83",
        alt: "Slide 3",
    },
    {
        src: "https://scontent.fkdt2-1.fna.fbcdn.net/v/t39.30808-6/401632583_827275699406022_3228130372177816084_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGt2865xH5MGAtCT5XLjukEePPGb-LLsVl488Zv4suxWbsLqoORHDLajF6VsFWUi7k1PwvaZpZE0XtkOliSfLXo&_nc_ohc=tS_B8j2CjAUQ7kNvgF7U9g0&_nc_oc=Adnkw-HG0NM8AuDCFThZukAy_5TBop3vnSHZ33aKERXtNjJ_46hfRLE2n3ai7hkC8fo&_nc_zt=23&_nc_ht=scontent.fkdt2-1.fna&_nc_gid=W1XHHmEhhTePIoSZJHqhqA&oh=00_AYF_zWCxUvu6NMpTm4i4kCZUtyPTwIfd6Tx6bkiWjDyixQ&oe=67E06D4B",
        alt: "Slide 4",
    },
];

const Carousel: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    // เลื่อนอัตโนมัติทุก 3 วินาที
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 5000);

        return () => clearInterval(timer);
    }, [length]);

    // เปลี่ยนสไลด์โดยกดปุ่ม Next / Prev
    const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

    // เปลี่ยนสไลด์โดยกด Indicators
    const goToSlide = (index: number) => setCurrent(index);

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            {/* Slides */}
            <div className="relative w-auto h-56 md:h-96 overflow-hidden rounded-lg">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.src}
                        alt={slide.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full focus:outline-none ${index === current ? "bg-white" : "bg-gray-400"}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        title={`Go to slide ${index + 1}`}
                        aria-current={index === current ? "true" : "false"}
                    />
                ))}
            </div>

            {/* Prev Button */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
                onClick={prevSlide}
            >
                ❮
            </button>

            {/* Next Button */}
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div >
    );
};

export default Carousel;
