import "./CheckoutPageStyle.css"
import React, {useState} from "react";
import WhereDelivery from "./WhereDelivery/WhereDelivery";
import WhenDelivery from "./WhenDelivery/WhenDelivery";
import RecommendedProductBar from "./recommendedProcuctBar/RecommendedProductBar";
import NextPageButton from "../generalComponents/NextPageButton/NextPageButton";
import StepBar from "./Stepbar/StepBar";

import OrderBasketItem from "./OrderBasket/OrderBasketItem";

import OrderBasket from "./OrderBasket/OrderBasket";
import OrderSummary from "./OrderSummary/OrderSummary";
import mockBasket from "../mockData/mockBasket";
import {Basket} from "../model/Basket";
import TopBar from "../generalComponents/TopBar/TopBar";
import BackToShopButton from "../generalComponents/BackToShopButton/BackToShopButton";

function CheckoutPage() {
    const [selected, setSelected] = useState(0)
    const [basket, setBasket] = useState(mockBasket)

    function updateBasket(newBasket : Basket)  {
        setBasket(newBasket)
    }
    return(
        <div>
            <div className={"order-page-container"}>
                <TopBar/>
                <StepBar step={1}/>

                <div className={"order-overview"}>
                    <OrderBasket basket={basket} updateBasket={updateBasket}/>
                    <OrderSummary basket={basket} deliveryCost={100}/>
                </div>
                <div className={"when-where"}>
                    <WhereDelivery selected={selected} setSelected={(newSelected) => setSelected(newSelected)}/>
                    <div className={"divider"}/>
                    <WhenDelivery timeSelectionOn={selected == 1 || selected == 2}/>


                </div>

                <div className={"navigation-buttons"}>
                    <BackToShopButton onClick={ () => console.log("It Works")}/>
                    <NextPageButton onClick={() => {}}/>
                </div>

                <RecommendedProductBar/>
            </div>
        </div>
    )
}

export default CheckoutPage
