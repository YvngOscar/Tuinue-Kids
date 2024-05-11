import React from "react";
import {IconType} from "react-icons";
import {CgSpinner} from "react-icons/cg";
import {buttonCss} from "./utils.ts";


interface props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    Icon?: IconType;
    loading?: boolean;
    btnType?: btnType;
}

export default function Button({text, Icon, btnType, loading, ...rest}:props){
    return <button
        {...rest}
        type={rest.type??'button'}
        className={`w-max h-[50px] flex pl-4 pr-4 rounded-full ${buttonCss[btnType??"solid"]} ${rest.className??""}`}
    >
        <span className={"flex gap-2 m-auto"}>
            {loading ?
                <CgSpinner className={"animate-spin"} />
                :
                text
            }
            {Icon && <Icon className={"m-auto"} />}
        </span>
    </button>
}

