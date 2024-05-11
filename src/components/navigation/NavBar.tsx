import logo from '../../assets/logo1.png'
import NavBtn from "../../uiComponents/buttons/NavBtn.tsx";
import useNavScrollStyle from "../../hooks/useNavScrollStyle.ts";
import {mainNavPaths} from "../../utils/siteData/paths.ts";
import MobileDropDown from "./MobileDropDown.tsx";

export default function NavBar() {
    const {style} = useNavScrollStyle();

    return (
        <nav className={`w-full h-[60px] leading-[60px] ${style} sticky top-0 flex justify-between z-50 pr-2`}>
            <NavBtn path={"home"} type={"trans"} className={"grid grid-flow-col !pl-0"}>
                <img src={logo} alt={"logo"} className={"w-[50px]"}/>
                <span className={"w-max h-max m-auto hidden md:grid auto-rows-max"}>
                    <p className={"text-secondary"}>Tuinue kids</p>
                    <p className={"text-pink"}>Foundation</p>
                </span>
            </NavBtn>
            <span className={"hidden md:flex gap-2"}>
                {
                    mainNavPaths.map((path, i) =>
                        <NavBtn key={i} path={path.path} type={path.type} className={"hidden md:block"}>
                            {path.text}
                        </NavBtn>
                    )
                }
            </span>
            <MobileDropDown/>
        </nav>
    )
}
