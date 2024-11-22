import React from "react";
// import Image from "next/image";

// interface CardProps {
//     image : string;
//     alt: string;
// }

interface CardProps {
    title : string;
}

const Card : React.FC<CardProps> = ({title}) => {
    return (
        <div className="card_home w-1/2 min-w-44 max-w-40 aspect-[1.54/1] bg-orange-600 rounded-[10px]">
            {/* <Image src={image} alt={alt} className=""/> */}
            <h4>{title}</h4>
        </div>
    )
}

export default Card;