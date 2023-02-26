import React from "react";
import "./FlowerCardStyles.css"


interface FlowerCardProps{
    className: string
    imageUrl: string
    title: String
    infoWithPrice: String
}

export const FlowerCard = ({className ="", imageUrl, title, infoWithPrice} : FlowerCardProps)=> {
    return(
        <div className={"flower-card " +className}>
            <img className={"image-style"} src={imageUrl}/>
            <p className={"text-style"}>{title}</p>
            <p className={"text-style"}>{infoWithPrice}</p>
        </div>
    )
}
