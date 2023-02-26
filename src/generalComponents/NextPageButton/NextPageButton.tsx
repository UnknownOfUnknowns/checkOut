import "./NextPageButtonStyle.css"
interface NextPageButtonProps{
    onClick: ()=> void
}

function NextPageButton({onClick} : NextPageButtonProps) {

    return(
        <button className={"forward"} onClick={onClick}>Næste</button>
    )
}

export default NextPageButton
