import React from "react";
import Image from "next/image";

interface LogoProps {
    image: string;
    alt: string; 
}

const Logo : React.FC<LogoProps> = ({ image, alt }) => {
    return (
        <div className="w-[64px]">
            <Image src={image} alt={alt} className="w-full object-cover"/>
        </div>
    )
}

export default Logo;
