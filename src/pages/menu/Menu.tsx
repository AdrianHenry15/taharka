import React from "react";
import PageContainer from "../../components/PageContainer";
import ProductDisplay from "./ProductDisplay";
import ProductDisplay2 from "./ProductDisplay2";
//IMAGES
import HoneyGraham from "../../assets/imgs/honey_graham.webp";
import VanillaBean from "../../assets/imgs/vanilla_bean.webp";
import NonDairyChoco from "../../assets/imgs/non-dairy-chocolate.webp";

const Menu = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-min w-2/3 bg-black text-white p-4">
                <span className="title-text">Ice Cream Flavors</span>
                <span className="aside-text">6 Pint Minimum</span>
            </div>
            <PageContainer>
                <aside className="text-gray-500">You must order 6 pints to complete an order.</aside>
                <div className="flex flex-col py-4">
                    <ProductDisplay
                        title="Honey Graham"
                        description="Graham ice cream with a graham cracker swirl."
                        product={HoneyGraham}
                    />
                    <ProductDisplay2
                        title="Vanilla Bean"
                        description="Madagascar vanilla ice cream with vanilla bean seeds."
                        product={VanillaBean}
                    />
                    <ProductDisplay
                        title="Non-Dairy Chocolate Love"
                        description="Dark chocolate ice cream with a chocolate cookie swirl."
                        product={NonDairyChoco}
                    />
                </div>
            </PageContainer>
        </div>
    );
};

export default Menu;
