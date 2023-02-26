import "./OrderBasketStyle.css"
import {useState} from "react";
import CountPicker from "../../generalComponents/CountPicker/CountPicker";
import {Product} from "../../model/Product";

interface OrderBasketItemProps {
    count: number,
    product: Product,

    setCount: (newCount : number) => void
}

function OrderBasketItem({product, count, setCount} : OrderBasketItemProps) {


    return(
        <div className={"entry"}>
            <div className={"info-area"}>
                <h2>{product.name}</h2>

                <div className={"price-count-area"}>
                    <p className={"price-tag"}>
                        {
                            "Pris: "+product.calculatePrice()*count+ "kr."
                        }
                    </p>
                    <CountPicker count={count} onChange={setCount}/>
                </div>
            </div>
            <img src={product.imageUrl} className={"image"}/>

        </div>
    )
}


export default OrderBasketItem
