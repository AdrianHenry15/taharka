import { Suspense } from "react";

import Collections from "@/components/layout/search/collections";
import FilterList from "@/components/layout/search/filter";
import { sorting } from "@/lib/constants";
import Footer from "@/components/footer";
import MobileFooter from "@/components/mobile-footer";

export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense>
            <div className="flex w-full bg-zinc-900 flex-col gap-8 px-4 pb-4 pt-10 text-black dark:text-white md:flex-row md:pt-36">
                <div className="order-first w-full flex-none md:max-w-[125px]">
                    <Collections />
                </div>
                <div className="order-last min-h-screen w-full md:order-none">{children}</div>
                <div className="order-none flex-none md:order-last md:w-[125px]">
                    <FilterList list={sorting} title="Sort by" />
                </div>
            </div>
            {/* <MobileFooter />
            <Footer /> */}
        </Suspense>
    );
}
