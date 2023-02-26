import "./BackToShopStyle.css"

interface BackToShopProps{
    onClick: ()=> void
}

function BackToShopButton({onClick}: BackToShopProps) {
    return(
            <button onClick={onClick} className={"back-to-shop"}>Tilbage til shoppen</button>


    )
}

export default BackToShopButton
