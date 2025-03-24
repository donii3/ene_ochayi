"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="w-full h-screen">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-full"
            >
                <SwiperSlide className="w-full h-full">
                    <Image 
                        src="/img/home/h1.jpg" 
                        alt="Hero Image 1"
                        width={1920} height={1080} 
                        className="w-full h-full object-cover"
                        priority
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <Image 
                        src="/img/home/h2.png" 
                        alt="Hero Image 2"
                        width={1920} height={1080} 
                        className="w-full h-full object-cover"
                        priority
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
