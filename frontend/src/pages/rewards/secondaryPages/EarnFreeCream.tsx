import React from "react";
import Tab from "../../../components/buttons/Tab";
import {
    BsFillPersonPlusFill,
    BsHandIndexThumb,
    BsFillBalloonFill,
    BsEnvelope,
    BsFacebook,
    BsGoogle,
    BsInstagram,
    BsLinkedin,
    BsPinterest,
    BsTiktok,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import BackBtn from "../../../components/buttons/BackBtn";

const EarnFreeCream = () => {
    return (
        <div className="h-full flex flex-col">
            <BackBtn path="/rewards" />
            <div className="fixed px-2 pb-4 mb-2 font-bold text-2xl bg-white w-full flex">
                <span>Earn Free Cream</span>
            </div>
            <div className="bg-zinc-300 flex flex-col h-full p-4 mt-10">
                {/* REWARD TABS  */}
                <Tab hasPoints name="Refer a friend" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFillPersonPlusFill size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Rate the app" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsHandIndexThumb size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Join birthday club" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFillBalloonFill size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Sign up for deals" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsEnvelope size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Facebook" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFacebook size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Leave a Facebook review" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFacebook size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Leave a Google review" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsGoogle size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Instagram" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsInstagram size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on LinkedIn" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsLinkedin size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Pinterest" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsPinterest size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on TikTok" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsTiktok size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Twitter" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsTwitter size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Youtube" tabClass="p-2" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsYoutube size={20} />
                    </span>
                </Tab>
            </div>
        </div>
    );
};

export default EarnFreeCream;
