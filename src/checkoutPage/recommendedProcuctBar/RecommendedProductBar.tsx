import React from "react";
import "./RecommendedProductStyle.css"
import {FlowerCard} from "../../generalComponents/FlowerCard/FlowerCard";

function RecommendedProductBar(){
    return(
        <div className={"background"}>
            <h1 className={"header-text"}>Vi anbefaler</h1>
            <div className={"card-row-recommended"}>
                <FlowerCard className={"recommended-card"} imageUrl={"https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"} title={"seiers blomst"} infoWithPrice={"10Kr"}/>
                <FlowerCard className={"recommended-card"} imageUrl={"https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"} title={"seiers blomst"} infoWithPrice={"10Kr"}/>
                <FlowerCard className={"recommended-card"} imageUrl={"https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"} title={"seiers blomst"} infoWithPrice={"10Kr"}/>
                <FlowerCard className={"recommended-card"} imageUrl={"https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"} title={"seiers blomst"} infoWithPrice={"10Kr"}/>
            </div>
        </div>
    )
}

export default RecommendedProductBar
