import fullLogo from "../assets/logo1.svg"
export default function LandingSection(){

    return (
        <section
            id={"home"}
            data-aos={"fade-up"}
            className={'w-full h-[50vh] flex mt-[-60px]'}
        >
            <span className={"w-max m-auto grid auto-rows-max justify-around text-center"}>
                <img className={"w-[15vh] m-auto"}
                     data-aos={"fade-left"}
                    src={fullLogo} alt={"Tuinue Kids foundation logo"}
                />
                <p
                    className={"text-secondary text-[42px]"}
                    data-aos={"fade-right"}
                >
                    Tuinue Kids
                </p>
                <p className={"text-pink text-[28px]"}>Foundation</p>
            </span>
        </section>
    )
}

