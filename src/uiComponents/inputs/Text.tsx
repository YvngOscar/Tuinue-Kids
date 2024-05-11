import React from "react";


interface props extends React.InputHTMLAttributes<HTMLInputElement>{
    label: string;
}

export default function Text({label, ...rest}:props){

    return (
        <span
            className={"w-full grid text-left"}
        >
            <label
                htmlFor={rest.name}
                className={""}
            >
                {label}
            </label>
            <input
                {...rest}
                type={rest.type??"text"}
                className={`text-input ${rest.className}`}
            />
        </span>
    )
}

