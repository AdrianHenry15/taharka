import React from "react";
import PageContainer from "../../../components/PageContainer";
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

const EarnFreeCream = () => {
    return (
        <div className="h-full flex flex-col">
            <div className="fixed px-2 pb-4 mb-2 font-bold text-2xl bg-white w-full flex">
                <span>Earn Free Cream</span>
            </div>
            <div className="bg-zinc-300 flex flex-col h-full p-4 mt-10">
                {/* REWARD TABS  */}
                <Tab hasPoints name="Refer a friend" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFillPersonPlusFill size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Rate the app" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsHandIndexThumb size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Join birthday club" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFillBalloonFill size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Sign up for deals" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsEnvelope size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Facebook" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFacebook size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Leave a Facebook review" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsFacebook size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Leave a Google review" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsGoogle size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Instagram" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsInstagram size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on LinkedIn" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsLinkedin size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Pinterest" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsPinterest size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on TikTok" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsTiktok size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Twitter" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsTwitter size={20} />
                    </span>
                </Tab>
                <Tab hasPoints name="Follow us on Youtube" textClass="font-bold">
                    <span className="text-pink-300">
                        <BsYoutube size={20} />
                    </span>
                </Tab>
            </div>
        </div>
    );
};

export default EarnFreeCream;
