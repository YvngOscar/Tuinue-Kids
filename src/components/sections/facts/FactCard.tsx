import React from "react";
import {IconType} from "react-icons";


interface props extends React.HtmlHTMLAttributes<HTMLDivElement>{
    region: "Kenya" | "Globally";
    stat: string;
    icon: IconType;
    source: string;
}

export default function FactCard({region, stat, source, icon, ...rest }:props){
    const Icon = icon;
    return (
        <div
            {...rest}
            className={` w-full text-left p-5 border border-solid rounded-lg bg-secondary-900 border-accent-400 ${rest.className??""}`}
        >
            <div
                className={"text-accent text-[3vmax] border border-solid border-transparent border-b-accent " +
                    "text-left font-bold"}>
                {region}
            </div>
            <div className={"grid grid-cols-2"}>
                <div className={"grid"}>
                    <span className={"text-left font-bold text-white"}>
                        {stat.split(" ").map((s, i)=>
                        <p key={i}>{s}</p>)}
                    </span>
                    <span className={"text-accent"}>
                        children
                    </span>
                </div>
                <Icon className={"text-[8ch] text-accent"}/>
            </div>
            <p className={"text-[12px] text-accent"}><i>{source}</i></p>
        </div>
    )
}

