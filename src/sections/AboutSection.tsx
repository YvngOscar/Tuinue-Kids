import data from '../utils/siteData/texts.json'
import React, {useMemo, useState} from "react";
import Button from "../uiComponents/buttons/Button.tsx";
import {GrDown, GrUp} from "react-icons/gr";

export default function AboutSection() {
    const [readAll, setReadAll] = useState(false)

    const text = useMemo(() => {
        const cut = window.innerWidth < 768 ? 2 : 4
        return readAll ? data.about : data.about.split("\n").slice(0, cut).join("\n")
    }, [readAll])

    const handleReadALl = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setReadAll(!readAll)
    }
    return (
        <section
            id={"about"}
            className={"w-[90%] md:w-[80%] z-10 pb-20 m-auto"}>
            <div className={"grid gap-2 md:grid-cols-2"}>
                <div
                    data-aos={'fade-up'}
                    className={"w-full h-max bg-secondary-900 text-white rounded-lg p-5"}
                >
                    <h3 className={"text-accent"}>Mission</h3>
                    <hr className={"border-t-2 border-gray-500 w-3/4 mx-auto"}/>
                    <p>{data.mission}</p>
                </div>
                <div
                    data-aos={'fade-up'}
                    className={"w-full h-max bg-secondary-900 text-white rounded-lg p-5"}>
                    <h3 className={"text-accent"}>Vision</h3>
                    <p>{data.vision}</p>
                </div>
            </div>
            <h1 data-aos={'fade-right'}>Who are we?</h1>
            <article
                data-aos={'fade-up'}
                className={"w-full min-h-[100px] flex flex-wrap !transition-all duration-700 p-5 bg-primary-600"}
            >
                {text.split("\n").map((par, i) =>
                    <p className={"flex flex-wrap"} key={i}>
                        {par}
                        {(i + 1 < text.split("\n").length) && <br/>}
                    </p>)
                }
                <Button
                    btnType={'trans-acc'}
                    onClick={handleReadALl}
                    Icon={readAll ? GrUp : GrDown}
                    text={readAll ? "Show fewer": 'Read all...'}
                />
            </article>
        </section>
    )
}

