import {useGallery} from "../hooks/useGallery.ts";
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {useLayoutEffect} from "react";
import logo from '../assets/logo1.svg'
import {CgSpinner} from "react-icons/cg";

export default function GalleryPage() {
    const gallery = useGallery();

    useLayoutEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, []);

    return (
        <div
            id={"gallery"}
            className={"w-full text-center p-5 min-h-[calc(100vh-60px)]"}
        >
            <h1>Gallery</h1>
            <div className={" min-h-[calc(100vh-60px)] columns-2 md:columns-3 space-y-2"}>
                {(!Array.isArray(gallery.data) || gallery.isFetching) ?
                    <span className={"absolute w-max h-max grid auto-rows-max m-auto bottom-0 top-0 left-0 right-0"}>
                        <h3>Tuinue Kids Foundation...</h3>
                        <CgSpinner className={"m-auto text-accent animate-spin !duration-[5s] text-[5ch]"}/>
                    </span> :
                    gallery.data?.map((img, i) =>
                        <LazyLoadImage
                            src={img}
                            key={i}
                            effect={'opacity'}
                            delayMethod={'debounce'}
                            delayTime={100}
                            className={"rounded-lg w-full h-max"}
                            placeholder={
                                <span className={"w-full h-[150px]"}>
                                    <img src={logo} alt={"Tuinue kids"}/>
                                </span>
                            }
                        />)
                }
            </div>
        </div>
    )
}

