import React, { useEffect, useState } from "react";
import PageContainer from "../../components/containers/PageContainer";
import { Products } from "../../utils/Data";
import Button from "../../components/buttons/Button";
import MenuDisplay from "./components/MenuDisplay";
import MenuDisplay2 from "./components/MenuDisplay2";

const Menu = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/products");

                if (!response.ok) {
                    throw new Error("Network reponse was not ok");
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-min w-2/3 bg-black text-white p-4">
                <span className="title-text">Ice Cream Flavors</span>
                <span className="aside-text">6 Pint Minimum</span>
            </div>
            <PageContainer className="mb-10">
                <aside className="text-gray-500 pt-6">You must order 6 pints to complete an order.</aside>
                <div className="flex items-center flex-col py-4">
                    {products.map(({ _id, name, image, description, price, devId }) => {
                        if (devId % 2 === 0) {
                            return <MenuDisplay key={_id} name={name} description={description} imageUrl={image} price={price} />;
                        } else {
                            return <MenuDisplay2 key={_id} name={name} description={description} imageUrl={image} price={price} />;
                        }
                    })}
                </div>
                {/* <span></span> */}
            </PageContainer>
            <Button path="/order" onClick={() => {}} containerClass="fixed" text="Order Now" />
        </div>
    );
};

export default Menu;
