import React from "react";


interface props extends React.TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
}

export default function TextArea({label, ...rest}:props){

    return (
        <span
            className={"w-full grid gap-4 text-left"}
        >
            <label htmlFor={rest.name}>
                {label}
            </label>
            <textarea
                {...rest}
                className={`w-full h-[30vh] border-2 border-solid p-2 focus:border-secondary border-secondary-200 rounded-md ${rest.className}`}
            />
        </span>
    )
}

