import React from "react";
import Image from "next/image";

interface HamMenuProps {
    image: string;
    alt: string; 
}

const HamMenu : React.FC<HamMenuProps> = ({ image, alt }) => {
    return (
        <div className="w-[40px] flex items-center">
            <Image src={image} alt={alt} className="w-full object-cover"/>
        </div>
    )
}

export default HamMenu;
