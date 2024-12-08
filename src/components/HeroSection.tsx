import Image from "next/image";
import heroImg from "../../public/images/hero-sec.jpg";
import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="mb-20 w-screen relative flex flex-col justify-center items-center">
            {/* Responsive Background Image */}
            <div className="w-full h-[60vh] sm:h-[75vh] md:h-screen relative">
                <Image
                    src={heroImg}
                    alt="hero"
                    className="object-cover"
                    fill
                    priority
                />
            </div>

            {/* Content */}
            <div className="absolute flex flex-col items-start justify-center text-white font-montserrat left-4 right-4 sm:left-[10%] md:left-[20%] top-[20%]">
                <p className="font-bold text-xs sm:text-sm md:text-base mb-5 sm:mb-7">
                    SUMMER 2020
                </p>
                <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-5 sm:mb-7">
                    NEW COLLECTION
                </h1>
                <p className="text-sm sm:text-base md:text-xl text-[#fafafa] w-full sm:w-[300px] md:w-[376px] mb-5 sm:mb-7">
                    We know how large objects will act, but things on a small scale.
                </p>
                <Link href={"/shop"}>
                    <button className="w-full sm:w-[200px] md:w-[221px] h-[50px] md:h-[62px] bg-[#2DC071] text-sm sm:text-base rounded-sm">
                        SHOP NOW
                    </button>
                </Link>
            </div>
        </div>
    );
}
