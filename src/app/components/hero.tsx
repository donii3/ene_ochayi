"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center">
            {/* Hero Slider */}
            <div className="relative w-full h-5/6">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="w-full h-full"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <SwiperSlide key={num} className="w-full h-full">
                            <Image
                                src={`/img/home/h${num}.png`}
                                alt={`Hero Image ${num}`}
                                width={1920} height={1080}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Info Line */}
            <div className="w-full text-center py-4 space-y-2 text-lg font-semibold">
                <div>Worked with over <span className="text-orange-500">400+</span> clients</div>
                <div>From 2016</div>
                <div><span className="text-orange-500">3000+</span> Photos Taken</div>
            </div>
        </section>
    );
};

export default Hero;