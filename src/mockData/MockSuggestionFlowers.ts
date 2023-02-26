import {Flower, FlowerFactory} from "../model/Flower";
import Prices from "../model/Prices";
import {FlowerConfiguration} from "../model/FlowerConfiguration";

const factory = FlowerFactory.Instance


const standardConfig = [
    new FlowerConfiguration({
        name: "Lille",
        desc: "Lille",
        price: 100
    }),
    new FlowerConfiguration({
        name: "Mellem",
        desc: "Mellem",
        price: 200
    }),
    new FlowerConfiguration({
        name: "Stor",
        desc: "Stor",
        price: 300
    })
]

const suggestedFlowers: Flower[] = [
    factory.createFlower("Lises liljer", standardConfig, "https://haveselskabet.dk/sites/default/files/styles/scale_w2000/public/images/article/main/6449--brandlilje.jpg?itok=xXAcJ36a"),
    factory.createFlower("Lars's roser", standardConfig, "https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"),
    factory.createFlower("Blomst", standardConfig, "https://haveselskabet.dk/sites/default/files/styles/scale_w2000/public/images/article/main/6449--brandlilje.jpg?itok=xXAcJ36a"),
    factory.createFlower("Flot blomst", standardConfig, "https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"),
    factory.createFlower("345", standardConfig, "https://haveselskabet.dk/sites/default/files/styles/scale_w2000/public/images/article/main/6449--brandlilje.jpg?itok=xXAcJ36a"),
    factory.createFlower("456", standardConfig, "https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"),
    factory.createFlower("567", standardConfig, "https://haveselskabet.dk/sites/default/files/styles/scale_w2000/public/images/article/main/6449--brandlilje.jpg?itok=xXAcJ36a"),
    factory.createFlower("678", standardConfig, "https://cdn.shopify.com/s/files/1/0617/8979/8631/products/Roderoser-min_1500x.jpg?v=1646290386"),
]
export default suggestedFlowers
