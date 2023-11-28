import React from "react";

export default async function PrivateLayout({ children }: { children: React.ReactNode }) {
    return <section className="flex flex-col w-full h-full">{children}</section>;
}
