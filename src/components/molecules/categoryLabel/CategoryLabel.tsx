import React from "react";

interface CategoryLabelProps {
    categoryName: string;
    link?: string; 
}

const CategoryLabel : React.FC<CategoryLabelProps> = ({ categoryName, link }) => {
    return (
        <div className="flex items-baseline gap-7">
            <h2 className="text-2xl capitalize mb-8">{categoryName}</h2>
            <p className="text-xl text-[#089F95]"><a href={`/${link}` || "#"}>See all +</a></p>
        </div>
    )
}

export default CategoryLabel;