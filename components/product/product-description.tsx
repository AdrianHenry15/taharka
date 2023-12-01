import { AddToCart } from "@/components/cart/add-to-cart";
import Price from "@/components/Price";
import Prose from "@/components/prose";
import { Product } from "@/lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
    return (
        <>
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
                <h1 className="mb-2 text-5xl text-white font-medium">{product.title}</h1>
                <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                    <Price
                        amount={product.priceRange.maxVariantPrice.amount}
                        currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                    />
                </div>
                {/* TODO: SHOP PAY INSTALLMENTS */}
                {/* TODO: QUANTITY = INCREASE || DECREASE ITEMS IN CART */}
                {/* <div className="flex flex-col text-white">
                    <p>Quantity</p>
                </div> */}
            </div>
            <VariantSelector options={product.options} variants={product.variants} />

            {product.descriptionHtml ? (
                <Prose className="mb-6 text-sm leading-tight dark:text-white/[60%]" html={product.descriptionHtml} />
            ) : null}

            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
            {/* TODO: ADD ICE CREAM INGREDIENTS */}
            <p className="text-zinc-500">{}</p>
        </>
    );
}
