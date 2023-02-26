import Prices from "./Prices";


export class FlowerConfiguration {
    name : string = ""
    desc : string = ""

    price : number = 0

    constructor(initializer? : any) {
        if(!initializer) return
        if(initializer.name) this.name = initializer.name
        if(initializer.desc) this.desc = initializer.desc
        if(initializer.price) this.price = initializer.price
    }
}
