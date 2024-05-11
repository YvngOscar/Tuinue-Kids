import video1 from "../../../assets/gallery/video1.mp4";
import video2 from "../../../assets/gallery/video2.mp4";
import video3 from "../../../assets/gallery/video3.mp4";
import video4 from "../../../assets/gallery/video4.mp4";
import video5 from "../../../assets/gallery/video5.mp4";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import React, {useRef} from "react";


export default function OurVideos() {
    const tray = useRef<HTMLDivElement | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const scroll = (_e: React.MouseEvent, right?: boolean) => {
        if (tray && tray.current) {
            const full = tray.current?.scrollWidth - tray.current?.clientWidth
            tray.current?.scrollTo({left: (right === undefined) || !right ? 0 : full, behavior: "smooth"})
        }
    }

    return (
        <div className={"mt-20 text-center"}>
            <h2>See us in action</h2>
            <div className={"videos"}>
                <button
                    onClick={scroll} className={"arrow-btn"}
                >
                    <AiOutlineArrowLeft/>
                </button>
                <button
                    onClick={(e)=>scroll(e, true)} className={"arrow-btn"}
                >
                    <AiOutlineArrowRight/>
                </button>
                <div ref={tray} className={"w-full gap-4 grid grid-flow-col auto-cols-max overflow-x-auto "}>
                    <video
                        data-aos={'fade-up'}
                        width={300} controls={true} preload={"metadata"}>
                        <source src={video1}/>
                    </video>
                    <video
                        data-aos={'fade-up'}
                        width={"300px"} controls={true} preload={"metadata"}>
                        <source src={video2}/>
                    </video>
                    <video
                        data-aos={'fade-up'}
                        width={"300px"} controls={true} preload={"metadata"}>
                        <source src={video3}/>
                    </video>
                    <video
                        data-aos={'fade-up'}
                        width={"300px"} controls={true} preload={"metadata"}>
                        <source src={video4}/>
                    </video>
                    <video
                        data-aos={'fade-up'}
                        width={"300px"} controls={true} preload={"metadata"}>
                        <source src={video5}/>
                    </video>
                </div>
            </div>
        </div>
    )
}

