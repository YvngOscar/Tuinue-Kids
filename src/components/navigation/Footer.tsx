

export default function Footer(){

    return (
        <footer className={"w-full h-[20vh] grid text-white bg-secondary-950"}>
            <span className={"m-auto"}>
                <p>&copy;{new Date().getUTCFullYear()} Tuinue Kids Foundation. All rights reserved</p>
            </span>
        </footer>
    )
}

