import Image from "next/image";

const AboutImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap" data-appear="fade-left" data-unload="fade-right">
            <div className="bringer-parallax-media">
                <Image src={src} alt={alt} width={960} height={960} className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default AboutImage;