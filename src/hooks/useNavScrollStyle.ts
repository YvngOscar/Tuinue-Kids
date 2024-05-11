import {useCallback, useEffect, useState} from "react";


export default function useNavScrollStyle(){
    const [style, setStyle] = useState<
        "bg-transparent !text-secondary-900"|"bg-secondary-900 !text-primary"
    >("bg-transparent !text-secondary-900")

    const handleScroll = useCallback(()=>{
        const percentage = (window.scrollY / window.innerHeight) * 100;
        setStyle(percentage > 50 ? "bg-secondary-900 !text-primary":"bg-transparent !text-secondary-900");
    }, [])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])
    return {style: style, scrolled: style === "bg-secondary-900 !text-primary"};
}

