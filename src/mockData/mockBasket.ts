import {Basket} from "../model/Basket";
import MockSuggestionFlowers from "./MockSuggestionFlowers";
import mockSuggestionFlowers from "./MockSuggestionFlowers";

let mockBasket = new Basket();


mockBasket.addItem(mockSuggestionFlowers[0])
mockBasket.addItem(mockSuggestionFlowers[3])
mockBasket.addItem(mockSuggestionFlowers[1], 3)
mockBasket.addItem(mockSuggestionFlowers[2],2)



export default mockBasket
