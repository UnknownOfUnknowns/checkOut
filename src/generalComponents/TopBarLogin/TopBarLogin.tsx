import "./TopBarLoginStyle.css";
import React, {useState} from "react";
import {MdVisibility, MdVisibilityOff} from "react-icons/all";
import {Checkbox} from "@mui/material";


interface LoginDialogProps{
    openLogin: boolean,
    onCloseLogin : () => void
}
function TopBarLogin({openLogin, onCloseLogin}:LoginDialogProps) {
    const outlined = {
        borderWidth: '1px',
        borderColor: 'green !important'
    }
    const focused = {}
    const outlineInput = {
        borderColor: "green"
    }

    const [showPassword, changePassword] = useState("password")
    const handleClickShowPassword = () => {

        if(showPassword === "password"){
            changePassword ("showPassword")
        }else{
            changePassword("password")
        }
    }

    const [checked, setChecked] = React.useState(false);

    const handleChangeCheck = () => {
        setChecked(!checked);
    };



    return (
        <dialog open={openLogin} className={"dialog"}>
            <h2>Log ind</h2>
            <div className={"dialogContent"}>
                <div className={"loginInputs"}>
                    <input type={"text"} className={"email-config"}  id={"username"} name={"username"} placeholder={"Indtast email"}/>
                    <input type={showPassword} className={"password-config"} minLength={8} required id={"password"} placeholder={"Indtast password"}/>
                </div>
                {
                    showPassword === "password" ?
                        <MdVisibilityOff className={"show-icon"} onClick={handleClickShowPassword} />
                    :
                        <MdVisibility className={"show-icon"} onClick={handleClickShowPassword} />

                }
                <label>
                    <input className={"checkbox"}
                        type={"checkbox"}
                        checked={checked}
                        onChange={handleChangeCheck}
                        />
                    Husk mit login
                </label>

                <button className={"loginButton"} onClick={onCloseLogin}>Log ind</button>

                <a className={"signupLink"}>Opret ny bruger</a>
            </div>
        </dialog>
    )
}


export default TopBarLogin