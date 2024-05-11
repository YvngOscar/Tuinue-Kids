import AboutSection from "./AboutSection.tsx";
import FactsSection from "./FactsSection.tsx";


export default function AboutAndFactsSections(){

    return (
        <div className={"w-full h-max space-y-5 overflow-hidden ab-fax"}>
            <AboutSection />
            <FactsSection />
        </div>
    )
}
