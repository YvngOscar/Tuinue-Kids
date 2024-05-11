import React, {createContext, useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {mainNavPaths} from "../utils/siteData/paths.ts";


export const NavContext = createContext<NavigationContext>({
    pathname: window.location.href,
    // setPathname: () => {}
})

interface props {
    children: React.ReactNode;
}

export default function NavigationContext({children}: props) {
    // const [pathname, setPathname] = useState(window.location.href);
    const {hash, pathname} = useLocation();
    const [current, setCurrent] = useState<string|undefined>()

    const scrollUpdate = useCallback(()=>{
        for(const path of mainNavPaths){
            let element = document.getElementById(path.path.replace("#", ''));
            element = element ? element : document.getElementById(path.path.replace("/", ''))
            const top = element ? element.getBoundingClientRect().top : window.innerHeight
            const inView = element ? (((top/window.innerHeight)*100 <= 30) && top >= 0) : false;
            if(inView){
                return setCurrent(path.path)
            }
        }
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', scrollUpdate)
        return ()=>document.addEventListener('scroll', scrollUpdate)
    }, [scrollUpdate]);

    useEffect(() => {
        if(hash){
            const element = document.getElementById(hash.slice(1));
            if(element){
                const stickyOffset = document.getElementsByTagName("nav")[0]?.offsetHeight + 10; // Adjust as needed
                const offset = element.getBoundingClientRect().top + window.scrollY - stickyOffset;
                window.scrollTo({top: offset, behavior: "smooth"});
            }
        }
    }, [hash]);

    return (
        <NavContext.Provider value={{
            pathname: pathname,
            hash: hash,
            current: current
            // setPathname: (path?:string) => setPathname(path??window.location.href)
        }}>
            {children}
        </NavContext.Provider>
    )
}

