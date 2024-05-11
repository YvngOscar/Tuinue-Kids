import kid from '../assets/ui/kiddo.png'
import FactCard from "../components/sections/facts/FactCard.tsx";
import {GiKenya} from "react-icons/gi";
import {RiGlobalFill} from "react-icons/ri";

export default function FactsSection() {

    return (
        <section className={"w-full h-screen flex "} >
            <div className={"w-[90%] h-max m-auto md:mr-auto md:ml-0"}>
                <div className={"flex flex-wrap gap-4"}>
                    <img
                        className={'w-1/3 hidden md:block mr-auto top-0 bottom-0'}
                        src={kid} alt={"kid with Cerebral palsy held by mom"}/>
                    <div className={"flex-1 min-w-[300px] mt-auto text-center"}>
                        <h2 className={"text-white"}>Quick facts</h2>
                        <span className={"grid md:grid-cols-2 gap-2"}>
                            <FactCard
                                data-aos={'zoom-out'}
                                region={"Kenya"}
                                stat={"1 in 100"}
                                icon={GiKenya}
                                source={"Source: Estimate according to experts, No official data"} />
                            <FactCard
                                data-aos={'zoom-out'}
                                region={"Globally"}
                                stat={"1-4 in 1000"}
                                icon={RiGlobalFill}
                                source={"Source: Centres for Disease Control and Prevention (CDC)"} />
                        </span>
                        <p className={"text-primary p-2 text-left"}>
                            There is little to no research by official bodies and organizations in Kenya pertaining  children living with Cerebral palsy in Kenya, highlighting one of the major challenges faced by persons with Cerebral palsy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

