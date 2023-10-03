import React from "react";

interface IPageContainerProps {
    children: React.ReactNode;
    className?: string;
}

const PageContainer = (props: IPageContainerProps) => {
    return <div className={`flex flex-col px-10 py-6 h-full ${props.className}`}>{props.children}</div>;
};

export default PageContainer;
