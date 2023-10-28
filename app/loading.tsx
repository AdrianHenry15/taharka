"use client";

import { Loader } from "@/app/ui/Loader";

const Loading = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <Loader />
        </div>
    );
};

export default Loading;
