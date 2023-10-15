import React from "react";
import PageContainer from "../../components/containers/PageContainer";
import { Products } from "../../utils/Data";
import Button from "../../components/buttons/Button";
import MenuDisplay from "./components/MenuDisplay";
import MenuDisplay2 from "./components/MenuDisplay2";

const Menu = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-min w-2/3 bg-black text-white p-4">
                <span className="title-text">Ice Cream Flavors</span>
                <span className="aside-text">6 Pint Minimum</span>
            </div>
            <PageContainer className="mb-10">
                <aside className="text-gray-500 pt-6">You must order 6 pints to complete an order.</aside>
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
            <Button path="/order" onClick={() => {}} containerClass="fixed" text="Order Now" />
        </div>
    );
};

export default Menu;
