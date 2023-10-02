import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProductDisplayProps {
    title: string;
    description: string;
    product: string;
}

const ProductDisplay2 = (props: IProductDisplayProps) => {
    return (
        <div className="flex items-center justify-between">
            <LazyLoadImage src={props.product} alt={props.title} className="w-1/3 drop-shadow-xl" />
            <div className="flex flex-col">
                <span className="text-lg text-back font-medium">{props.title}</span>
                <span className="text-sm">{props.description}</span>
            </div>
        </div>
    );
};

export default ProductDisplay2;
