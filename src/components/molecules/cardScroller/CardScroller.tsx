import React from "react";

interface CardScrollerProps {
    children: React.ReactNode; 
}

const CardScroller: React.FC<CardScrollerProps> = ({ children }) => {
    return (
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing">
            {children}
        </div>
    );
};

export default CardScroller;
