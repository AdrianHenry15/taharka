import { getCollectionProducts } from "@/lib/shopify";
import Link from "next/link";
import { GridTileImage } from "./grid/tile";

export async function Carousel() {
    // Collections that start with `hidden-*` are hidden from the search page.
    const products = await getCollectionProducts({ collection: "hidden-homepage-carousel" });

    if (!products?.length) return null;

    // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
    const carouselProducts = [...products, ...products, ...products];

    return (
        <div className="flex flex-col mt-10">
            {/* COOKIE FLAVOR TAB */}
            <aside className="flex flex-col bg-black p-4 text-white justify-start w-min mb-10">
                <h2 className="font-semibold text-2xl whitespace-nowrap">All Ice Cream Flavors</h2>
                <p className="text-zinc-400 text-xs">MINIMUM 6 PINTS</p>
            </aside>
            <div className=" w-full overflow-x-auto pb-6 pt-1 my-14">
                <ul className="flex animate-carousel gap-4">
                    {carouselProducts.map((product, i) => (
                        <li
                            key={`${product.handle}${i}`}
                            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                        >
                            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
                                <GridTileImage
                                    alt={product.title}
                                    label={{
                                        title: product.title,
                                        amount: product.priceRange.maxVariantPrice.amount,
                                        currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                                    }}
                                    src={product.featuredImage?.url}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
