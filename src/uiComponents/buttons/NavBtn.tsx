import React, {useContext, useMemo} from "react";
import {buttonCss} from "./utils.ts";
import {NavContext} from "../../contexts/NavigationContext.tsx";
import {Link} from "react-router-dom";


interface props extends React.LinkHTMLAttributes<HTMLLinkElement> {
    children: React.ReactNode;
    path: string;
    type?: btnType;
}

export default function NavBtn({path, children, type, ...rest}: props) {
    const { pathname, hash, current, }
        = useContext(NavContext);

    const style = useMemo(() => {
        const isActive = path === current;
        if (path === "#donate" && isActive) return buttonCss["secondary"]
        if (path === '#donate') return buttonCss["solid-acc"]
        if (type) return buttonCss[type]
        if ((path === hash && pathname==="/" && isActive) ) return buttonCss["out-acc"];
        if (isActive && path === pathname) return buttonCss["out-acc"];
        if (isActive) return buttonCss["out-acc"];
        return buttonCss["trans-acc"];
    }, [hash, path, pathname, current, type]);

    const data = `data-${path.replace("#",'')}`

    return (
        <Link to={path.replace("#", "/#")}
           // onClick={handleClick}
           data-main-page={data}
           className={`flex w-max mt-auto mb-auto gap-2 pl-5 pr-5 h-[50px] leading-[50px] 
           rounded-full ${style} ${rest.className}`}
        >
            {children}
        </Link>
    )
    // return (
    //     <a href={path}
    //        onClick={handleClick}
    //        data-main-page={data}
    //        className={`flex w-max mt-auto mb-auto gap-2 pl-5 pr-5 h-[50px] leading-[50px]
    //        rounded-full ${style} ${rest.className}`}
    //     >
    //         {children}
    //     </a>
    // )
}

