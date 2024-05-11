import LandingWave from "../components/sections/landing/LandingWave.tsx";
import LandingSection from "../sections/LandingSection.tsx";
import AboutAndFactsSections from "../sections/AboutAndFactsSections.tsx";
import DonateSection from "../sections/DonateSection.tsx";
import ContactUsSection from "../sections/ContactUsSection.tsx";


export default function MainPage(){

    return (
        <main id={"main-page"}>
            <LandingWave/>
            <LandingSection/>
            <AboutAndFactsSections/>
            <DonateSection />
            <ContactUsSection />
        </main>
    )
}

