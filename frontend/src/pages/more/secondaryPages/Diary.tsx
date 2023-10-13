import React from "react";
import PageContainer from "../../../components/PageContainer";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { FaRegHandPointUp } from "react-icons/fa";
import { LiaCalendarCheck, LiaStar } from "react-icons/lia";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { PiIceCreamLight } from "react-icons/pi";
import { TbGrave2 } from "react-icons/tb";
import DiaryTab from "../components/DiaryTab";
import { Outlet } from "react-router-dom";
import BackBtn from "../../../components/buttons/BackBtn";

const Diary = () => {
    return (
        <PageContainer>
            <BackBtn path="/more" />
            <div className="flex w-full justify-between items-center">
                <span className="font-bold text-xl">Ice Cream Diary</span>
                <div className="text-zinc-400">
                    <AiOutlineQuestionCircle />
                </div>
            </div>
            <div className="flex overflow-x-scroll h-20">
                <DiaryTab text="My Reviews">
                    <MdOutlineReviews />
                </DiaryTab>
                <DiaryTab text="To Review">
                    <FaRegHandPointUp />
                </DiaryTab>
                <DiaryTab text="This Week">
                    <LiaCalendarCheck />
                </DiaryTab>
                <DiaryTab text="Last Week">
                    <BsArrowCounterclockwise />
                </DiaryTab>
                <DiaryTab text="Popular">
                    <LiaStar />
                </DiaryTab>
                <DiaryTab text="Graveyard">
                    <TbGrave2 />
                </DiaryTab>
                <DiaryTab text="Classics">
                    <PiIceCreamLight />
                </DiaryTab>
            </div>
            <Outlet />
        </PageContainer>
    );
};

export default Diary;
