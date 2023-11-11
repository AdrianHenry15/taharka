"use client";

import React from "react";

interface IVideoPlayerProps {
    src: string;
}

const VideoPlayer = (props: IVideoPlayerProps) => {
    return (
        <video className="h-min top-0 w-full mt-[50px] md:mt-0" autoPlay muted loop>
            <source src={props.src} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
