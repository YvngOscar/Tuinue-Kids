import {mainNavPaths} from "../../utils/siteData/paths.ts";
import {useEffect, useRef, useState} from "react";
import Aos from "aos";
import {Link} from "react-router-dom";


export default function MobileDropDown() {
    const dropDown = useRef<HTMLDivElement>(null)
    const [drop, setDrop] = useState(false)

    useEffect(() => {
        Aos.refresh()
    }, []);

    useEffect(() => {
        // Handle clicks outside the dropdown
        const handleClickOutside = (event: MouseEvent) => {
            if (drop && !dropDown.current?.contains(event.target as Node)) {
                setDrop(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [drop]);

    return (
        <div
            ref={dropDown}
            className={'grid md:hidden'}>
            <button
                className={`drop-down-btn ${drop?"open":""} `}
                onClick={()=>setDrop(!drop)}
            >
                <div className={"bg-accent"} />
                <div className={"bg-accent"} />
                <div className={"bg-accent"} />
            </button>
            {drop &&
                <span
                    data-aos-duration={700}
                    data-aos={'zoom-out'} className={`w-[200px] fixed right-0 top-[60px] grid bg-accent gap-2`}>
                {
                    mainNavPaths.map((path, i) =>
                        <Link
                            to={path.path.replace("#", "/#")}
                            key={i}
                            onClick={()=>setDrop(false)}
                            className={"w-full h-[40px] leading-[40px] text-center bg-accent hover:bg-accent-600 active:bg-accent-700 text-white"}>
                            {path.text}
                        </Link>
                    )
                }
            </span>}
        </div>
    )
}

