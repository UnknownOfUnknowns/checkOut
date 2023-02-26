
import "./OrderBasketStyle.css"
import OrderBasketItem from "./OrderBasketItem";
import {useState} from "react";
import {Basket} from "../../model/Basket";
interface OrderBasketProps {
    basket : Basket

    updateBasket : (newBasket: Basket) => void
}


function OrderBasket({basket, updateBasket} : OrderBasketProps) {
    return (
        <div className={"basket"}>
            <h1>Mine Varer</h1>
            <div className={"scroll-area"}>
                {
                    Array.from(basket.items.entries()).map((value, key, map) => (
                       <OrderBasketItem count={value[1]} product={value[0]}
                        setCount={
                           (newCount) => {
                               const updatedBasket = new Basket()
                               updatedBasket.items = new Map(basket.items.entries())
                               if(newCount <= 0 ) {
                                   updatedBasket.items.delete(value[0])
                               } else {
                                   updatedBasket.items.set(value[0], newCount)
                               }

                               updateBasket(updatedBasket)

                           }
                       }/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderBasket
