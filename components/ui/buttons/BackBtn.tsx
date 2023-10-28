import Link from "next/link";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";

interface IBackBtnProps {
    path: string;
    className?: string;
}

const BackBtn = (props: IBackBtnProps) => {
    return (
        <Link href={props.path} className={`${props.className} fixed left-2 top-5 z-50`}>
            <FiChevronLeft size={25} />
        </Link>
    );
};

export default BackBtn;
