import React from "react";
import Image from "next/image";

interface LogoSocial {
    image: string;
    // alt: string; 
}

const LogoSocial : React.FC<LogoSocial> = ({ image }) => {
    return (
        <div className="w-[49px] h-[49px]">
            <Image src={image} className="w-full object-cover"/>
        </div>
    )
}

export default LogoSocial;
