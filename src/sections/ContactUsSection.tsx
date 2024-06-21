import {TbMessageHeart} from "react-icons/tb";
import Text from "../uiComponents/inputs/Text.tsx";
import TextArea from "../uiComponents/inputs/TextArea.tsx";
import Button from "../uiComponents/buttons/Button.tsx";
import {FiSend} from "react-icons/fi";
import {contacts} from "../utils/siteData/texts.json"
import {IconType} from "react-icons";
import {RiFacebookFill, RiInstagramFill, RiTwitterXLine, RiWhatsappFill} from "react-icons/ri";
import React, {useRef} from "react";
import emailJs from '@emailjs/browser'

export default function ContactUsSection() {
    const socials: { [key in Social]: string } = contacts.socials
    const icons: { [key in Social]: IconType } = {
        "Facebook": RiFacebookFill,
        "Twitter": RiTwitterXLine,
        "Instagram": RiInstagramFill,
        "Whatsapp": RiWhatsappFill
    }
    const form = useRef<HTMLFormElement>(null)

    const submitEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!form.current) return;
        emailJs
            .sendForm(
                'service_hmo3hob',
                'template_y1ymxow',
                form.current, {
                    publicKey: 'wkxTUlgJqHsEtXDrO',
                }
            )
            .then(()=>{
                alert("Thank your for sending us a message, we will respond as soon as possible!")
                form.current?.reset()
            })
            .catch(() => {
                alert("Sorry, something went wrong, your email wasn't sent! Please try again.")
            })
    }

    return (
        <section
            id={"contacts"}
            className={"w-full m-auto md:w-full min-h-[50vh] space-y-10 text-center bg-primary-800 mt-5 pb-10"}
        >
            <span>
                <h1 className={"w-max leading-none flex m-auto"}>Contact us <TbMessageHeart className={"text-pink"}/></h1>
                <p className={"text-accent-800"}>We literally smile at the notification of your message</p>
            </span>
            <div className={"w-[90%] flex flex-wrap gap-8 m-auto"}>
                <form
                    onSubmit={submitEmail}
                    ref={form}
                    data-aos={'zoom-out'}
                    className={"flex-1 min-w-[300px] p-4 bg-primary-700 grid gap-2 rounded-lg"}>
                    <h4>Send us an email</h4>
                    <span className={"grid md:grid-flow-col gap-4 "}>
                        <Text
                            label={"Name"}
                            name={"from_name"}
                            placeholder={"Your name"}
                            required={true}
                        />
                        <Text
                            label={"Email"}
                            name={"email"}
                            placeholder={"Your email"}
                            required={true}
                        />
                    </span>
                    <Text
                        label={"Subject"}
                        name={"subject"}
                        placeholder={"Email subject"}
                    />
                    <TextArea
                        label={"Message"}
                        name={"message"}
                        placeholder={"Short message..."}
                        required={true}
                    />
                    <Button
                        btnType={"solid"}
                        type={'submit'}
                        text={"Send message"}
                        Icon={FiSend}
                        className={''}
                    />
                </form>
                <div className={"min-w-[300px] grid auto-rows-max gap-4"}>
                    <span
                        data-aos={'fade-up'}
                        className={"grid border text-left bg-primary-900 p-4 rounded-md"}
                    >
                        <h4>Phone</h4>
                        <span className={"grid"}>
                            {contacts.phone.map((phone, i) =>
                                <a href={`tel:${phone}`} key={i}
                                   className={"w-full"}
                                >
                                    {phone}
                                </a>)}
                        </span>
                    </span>
                    <span
                        data-aos={'fade-up'}
                        className={"grid border text-left bg-primary-900 p-4 rounded-md"}
                    >
                        <h4>Socials</h4>
                        <span className={"grid"}>
                            {
                                Object.keys(socials).map((social, key) => {
                                    const Icon = icons[social as Social]
                                    return <a href={socials[social as Social]} key={key}
                                              className={"w-max text-blue-900 hover:text-secondary flex gap-2"}
                                    >
                                        {social}
                                        {<Icon className={"m-auto"}/>}
                                    </a>
                                })
                            }
                        </span>
                    </span>
                </div>
            </div>
        </section>
    )
}

