import React from "react";
import Image from "next/image";

interface LogoProps {
    image: string;
    alt: string; 
}

const Logo : React.FC<LogoProps> = ({ image, alt }) => {
    return (
        <div className="w-[110px] content-center">
            <Image src={image} alt={alt} layout="responsive"  width={140} height={60} className="w-full object-cover"/>
        </div>
    )
}

export default Logo;
