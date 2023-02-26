import Prices from "./Prices";
import {FlowerConfiguration} from "./FlowerConfiguration";
import {Product} from "./Product";

export function createFlowers(data : any[]) : Flower[] {
    console.log(data)
    return data.map(value => new Flower(value))
}
export class Flower extends Product {
    configurations : FlowerConfiguration[] = []

    flowerType : string = "CLASSIC_BOUQUET"
    chosenConfiguration? : FlowerConfiguration

    constructor(initializer?: any) {
        if(!initializer) return
        super(initializer.imageUrl, initializer.name)
        if(initializer.configurations) this.configurations = initializer.configurations
        if(initializer.chosenConfiguration) this.chosenConfiguration = initializer.chosenConfiguration
        else if(this.configurations.length > 0) {
            this.chosenConfiguration = this.configurations[0]
        }
        if(initializer.flowerType) this.flowerType = initializer.flowerType
    }


    calculatePrice(): number {
        return this.chosenConfiguration ? this.chosenConfiguration.price : 0
    }
}

export class FlowerFactory {
    private static _instance: FlowerFactory

    private constructor() {
    }
    public static get Instance() {
        return this._instance || (this._instance = new this())
    }

    public createFlower(name : string, flowerConfigurations : FlowerConfiguration[], imageUrl: string) : Flower {
        return new Flower({
                imageUrl: imageUrl,
                configurations: flowerConfigurations,
                name: name
            })
    }
}



