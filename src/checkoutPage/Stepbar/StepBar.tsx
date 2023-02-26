import "./StepbarStyle.css"
import {AiOutlineMail, IoNewspaper, IoPersonOutline, MdPayment} from "react-icons/all";

interface StepBarProps {
    step: number
}
function StepBar({step}: StepBarProps){
    const icons = [
        {
           icon: <IoNewspaper className={"icon"}/>,
           text: "Ordre"
        },
        {
            icon: <IoPersonOutline className={"icon"}/>,
            text: "Afsender"
        },
        {
            icon: <AiOutlineMail className = {"icon"}/>,
            text: "Modtager"
        },
        {
            icon: <MdPayment className={"icon"}/>,
            text: "Betaling"
        },
    ]
    return(
        <div className={"step-bar-container"}>
            <div className={"step-bar"}>
                {
                    icons.map((value, index, array) => (
                        <div className={"step-container " + (index < step ? "selected" : "")}>
                            <IconWithText icon={value.icon} text={value.text}/>
                            {
                                index < 3 ? <Line/> : null
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

interface IconWithTextProps {
    icon: any
    text: string
}
function IconWithText({icon, text}: IconWithTextProps) {
    return(
        <div className={"icon-with-text"}>
            {icon}
            <p className={"icon-text"}>{text}</p>
        </div>
    )
}


function Line() {
    return(
        <div className={"line" }></div>
    )
}

export default StepBar
