"use client";

import React, { useEffect, useRef } from "react";

interface IVideoPlayerProps {
    src: string;
}

const VideoPlayer = (props: IVideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Disable video controls
        videoRef.current ? (videoRef.current.controls = false) : null;
    }, []);

    return (
        <video className="h-min top-0 w-full mt-[50px] md:mt-0" autoPlay muted loop controls={false} playsInline>
            <source src={props.src} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
