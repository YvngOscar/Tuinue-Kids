import donateImg from "../assets/ui/donateImg.png"
import bankLogo from "../assets/ui/family-bank-logo-600px.png"
import groupPhoto from "../assets/ui/landingImg.jpg"
import data from "../utils/siteData/texts.json"
import {BiSolidDonateHeart} from "react-icons/bi";
import {GiMedicines} from "react-icons/gi";
import {TbWheelchair} from "react-icons/tb";
import {HiMiniUserGroup} from "react-icons/hi2";
import {ImSpoonKnife} from "react-icons/im";
import Button from "../uiComponents/buttons/Button.tsx";
import OurVideos from "../components/sections/donateSection/OurVideos.tsx";

export default function DonateSection() {
    // remember to edit in case you edited the whatWeDo list is edited
    const Icons = [GiMedicines, TbWheelchair, HiMiniUserGroup, ImSpoonKnife]

    const copyTransactions = () => {
        try{
            const { paybill, accNumber } = data.donation.bank;
            navigator.clipboard.write([
                new ClipboardItem({paybill: paybill}),
                new ClipboardItem({accountNumber: accNumber})])
                .then(() => alert("copied to clipboard"))
                .catch(() => {
                    const text = paybill + "\n " + accNumber;
                    navigator.clipboard.writeText(text)
                        .then(()=>alert("Copied to clipboard"))
                        .catch(err_2=> {
                            throw new Error(err_2)
                        })
                })
        }catch (e) {
            alert("Unable to copy to clipboard")
        }
    }

    return (
        <section
            className={"w-[90%] m-auto overflow-x-hidden"}
        >
            <h1
                data-aos={"fade-right"}
                className={"text-center"}>
                Help us make a difference
            </h1>
            <img
                data-aos={'fade-up'}
                src={donateImg} alt={""}
            />
            <div className={"w-full mt-[-5px] flex flex-wrap gap-4"}>
                <div
                    id={"donate"}
                    data-aos={'fade-up'}
                    className={"w-full md:w-[300px] overflow-hidden md:sticky md:top-0 rounded-lg p-4 grid auto-rows-max gap-2 bg-secondary-900"}
                >
                    <h3
                        className={"text-white flex"}>
                        Donate <BiSolidDonateHeart className={"mt-auto mb-auto"} />
                    </h3>
                    <img src={bankLogo} alt={""} className={"w-max h-[5vh] object-contain"}/>
                    <div className={"flex flex-wrap gap-2"}>
                        <span className={"flex-1 min-w-[200px] text-accent"}>
                            <p className={"text-[12px]"}>Paybill number</p>
                            <p className={"text-[24px] !break-all font-bold"}>
                                {data.donation.bank.paybill}
                            </p>
                        </span>
                        <span className={"flex-1 min-w-[200px] text-accent"}>
                            <p className={"text-[12px]"}>Account number</p>
                            <p className={"text-[24px] !break-all font-bold"}>
                                {data.donation.bank.accNumber}
                            </p>
                        </span>
                    </div>
                    <Button
                        btnType={"out-acc"}
                        text={"Copy to clipboard"}
                        onClick={copyTransactions}
                    />
                </div>
                <div className={"w-full grid gap-4 flex-1"}>
                    <h2
                        data-aos={'fade-left'}
                        className={"h-max leading-none"}
                    >
                        How we use donations
                    </h2>
                    <div className={"w-full flex flex-wrap gap-4"}>
                        <div className={"w-full min-w-[200px] columns-1 md:columns-2 space-y-3 gap-3 "}>
                            {data.whatWeDo.map((weDo, i) => {
                                const Icon = Icons[i]
                                return <div
                                    data-aos={'fade-right'}
                                    data-aos-delay={i*100}
                                    className={"w-full cursor-pointer hover:bg-primary-900 min-h-[15vh] grid auto-rows-max justify-start p-2 bg-primary-600 rounded-lg"}
                                    key={i}
                                >
                                    <p className={"text-secondary-900 font-bold"}>
                                        {Icon&&<Icon className={"text-[3ch]"} />}{weDo.activity}
                                    </p>
                                    <p className={"text-[12px]"}>
                                        {weDo.includes.join(", ")}
                                    </p>
                                </div>
                            })
                            }
                        </div>
                        <div
                            data-aos={'fade-right'}
                            data-aos-delay={300}
                            className={"w-full h-max flex-1"}>
                            <img className={"w-full max-h-[40vmax] object-top rounded-lg object-cover"} src={groupPhoto} alt={""}/>
                        </div>
                    </div>
                </div>
            </div>
            <OurVideos />
        </section>
    )
}

