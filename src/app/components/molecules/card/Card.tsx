import React from "react";
// import Image from "next/image";

// interface CardProps {
//     image : string;
//     alt: string;
// }

const Card : React.FC = ({ }) => {
    return (
        <div className="w-1/2 min-w-44 max-w-72 aspect-[1.54/1] bg-orange-600 rounded-[10px]">
            {/* <Image src={image} alt={alt} className=""/> */}
        </div>
    )
}

export default Card;