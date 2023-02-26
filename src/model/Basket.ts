import {Product} from "./Product";


export class Basket {
    items : Map<Product, number> = new Map();


    addItem(product: Product, count: number = 1) {
        this.items.set(product, count)
    }

    changeItemCount(product : Product, count : number) {
        this.items.set(product, count)
    }

    totalCost() : number {
        let result = 0
        this.items.forEach((value, key) => {
            result += value*key.calculatePrice()
        })
        return result
    }
}
