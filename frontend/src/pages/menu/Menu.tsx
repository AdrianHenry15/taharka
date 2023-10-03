import React from "react";
import PageContainer from "../../components/PageContainer";
import MenuDisplay from "./MenuDisplay";
import MenuDisplay2 from "./MenuDisplay2";
import { Products } from "../../lib/Data";
import OrderBtn from "../../components/buttons/OrderBtn";

const Menu = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-min w-2/3 bg-black text-white p-4">
                <span className="title-text">Ice Cream Flavors</span>
                <span className="aside-text">6 Pint Minimum</span>
            </div>
            <PageContainer className="mb-10">
                <aside className="text-gray-500">You must order 6 pints to complete an order.</aside>
                <div className="flex items-center flex-col py-4">
                    {Products.map(({ id, title, description, img }) => {
                        if (id % 2 === 0) {
                            return <MenuDisplay key={id} title={title} description={description} product={img} />;
                        } else {
                            return <MenuDisplay2 key={id} title={title} description={description} product={img} />;
                        }
                    })}
                </div>
            </PageContainer>
            <OrderBtn />
        </div>
    );
};

export default Menu;
