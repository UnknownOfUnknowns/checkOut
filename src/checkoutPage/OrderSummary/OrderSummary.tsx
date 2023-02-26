import "./OrderSummaryStyle.css"
import {Basket} from "../../../model/Basket";

interface OrderSummaryProps{
    basket: Basket,
    deliveryCost: number
}
function OrderSummary({basket, deliveryCost}:OrderSummaryProps) {

    return (
        <div className={"summary-container"}>
            <h1>Resume</h1>
            {
                Array.from(basket.items.entries()).map((value, index, array) => (
                    <div className={"product-line"}>
                        <p>{value[1]} stk.</p>
                        <p>{value[0].name}</p>
                        <p>á {value[0].calculatePrice()} kr.</p>
                    </div>
                ))
            }
            <div className={"standard-line"}>
                <p>Subtotal</p>
                <p>{basket.totalCost()}kr.</p>
            </div>
            <div className={"product-line"}>
                <p>Levering</p>
                <p>{deliveryCost}kr.</p>
            </div>
            <div className={"standard-line"}>
                <p>Samlet</p>
                <p>{basket.totalCost()+deliveryCost}kr.</p>
            </div>

        </div>
    )

}


export default OrderSummary
