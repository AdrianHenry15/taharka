import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalStateStore } from "../../store/GlobalStateStore";
import { GlobalStateContext } from "../../context/GlobalStoreContext";

interface IFlavorDisplayProps {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    imgClass?: string;
    className?: string;
}

const FlavorDisplay = (props: IFlavorDisplayProps) => {
    const store = useContext<GlobalStateStore>(GlobalStateContext);

    const { productId } = useParams(); // Access the flavorName from the route parameters
    const [product, setProduct] = useState<IFlavorDisplayProps | null>(null);

    useEffect(() => {
        // Fetch details of the selected flavor
        const fetchProduct = async () => {
            try {
                const response = await axios.get<IFlavorDisplayProps>(`${store.BaseUrl}/products/${productId}`);
                if (response.status === 200) {
                    setProduct(response.data);
                } else {
                    throw new Error("Product not found");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div>
            {product ? (
                <div className={props.className}>
                    <span>Served Cold</span>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                    <img src={product.imageUrl} alt={product.name} className={`${props.imgClass} `} />
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default FlavorDisplay;
