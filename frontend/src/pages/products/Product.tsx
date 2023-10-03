import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface IProductProps {
    title: string;
    description: string;
    product: string;
}

const Product = (props: IProductProps) => {
    return (
        <Link to={`/`}>
            <div className="flex flex-col items-center justify-between cursor-pointer">
                <div className="flex flex-col items-center">
                    <span className="text-2xl text-back font-bold">{props.title}</span>
                    <span className="text-sm text-gray-500">{props.description}</span>
                </div>
                <LazyLoadImage src={props.product} alt={props.title} className="w-3/4 drop-shadow-xl" />
            </div>
        </Link>
    );
};

export default Product;
