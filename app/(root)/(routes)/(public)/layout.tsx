"use client";
import React from "react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return <section className="flex flex-col w-full h-full">{children}</section>;
}
