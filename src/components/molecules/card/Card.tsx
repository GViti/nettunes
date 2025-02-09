import React from "react";
import Image from "next/image";

interface CardProps {
    image : string;
    alt: string;
    title : string;
}


const Card : React.FC<CardProps> = ({image, alt, title}) => {
    return (
        <div>
            <div className="card_home w-1/2 min-w-44 max-w-40 aspect-[1.54/1] bg-slate-600 rounded-[10px]">
                <Image 
                    src={image} 
                    alt={alt} 
                    width={100} // specifica la larghezza
                    height={60} // specifica l'altezza
                    className="w-full h-full object-cover rounded-[10px]"
                />            
            </div>
            <h4 className="text-white text-lg max-w-40 overflow-hidden mt-4">{title}</h4>
        </div>
    )
}

export default Card;