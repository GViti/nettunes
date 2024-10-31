import React from "react";
import Card from "../../molecules/card/Card";

interface CardListProps {
    title: string;
}

const CardList: React.FC<CardListProps> = ({title}) => {
    return (
        <div className="px-4">
            <div className="flex gap-4">
                <h3>{title}</h3>
                <h5 className="text-[#089F95]">See more+</h5>
            </div>
            <div className="flex gap-6  overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
        
    )
}

export default CardList;