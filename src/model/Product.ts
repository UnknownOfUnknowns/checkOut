
export abstract class Product {

    imageUrl: string = ""

    name : string = ""

    constructor(url? : string, name? : string) {
        if(url) this.imageUrl = url
        if(name) this.name = name
    }

    abstract calculatePrice() : number;
}
