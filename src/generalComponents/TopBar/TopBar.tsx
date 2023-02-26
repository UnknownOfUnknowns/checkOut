import React, {useState} from "react";
import {IoMenuSharp, IoPersonCircleOutline} from "react-icons/io5";
import CompanyLogo from "../../../src/assets/companyLogo.png";
import "./TopBarStyle.css";
import "../../generalComponents/TopBarLogin/TopBarLogin"
import TopBarLogin from "../TopBarLogin/TopBarLogin";


function TopBar() {
    const [openLoginPopup, setOpenLoginPopup] = useState(false)

    return(

        <div className={"row"}>



            <img className={"companyLogo"}
                src = {CompanyLogo} alt={"Company-Logo"}
            />

            <TopBarLogin openLogin={openLoginPopup} onCloseLogin={() => setOpenLoginPopup(false)}/>

            <div className={"icons"}>
            <IoPersonCircleOutline onClick={() => setOpenLoginPopup(!openLoginPopup)} className={"loginIcon"}/>

            <IoMenuSharp onClick={OnClickMenu} className={"topBarMenu"}

            />
            </div>

        </div>

    )
}

function OnClickMenu(){
            console.log("hej")
}



export default TopBar
