import {Strategy} from "../src/Utils/strategy/Strategy";
import {StrategyDiscount} from "../src/Utils/strategy/StrategyDiscount";
import {StrategyRebates} from "../src/Utils/strategy/StratygyRebates";

export enum DiscountType {
    FIVE_DISCOUNT = '打五折',
    SEVEN_DISCOUNT = '打七折',
    NINE_DISCOUNT = '打九折',
    THREE_AGAINST_ONE = '满300返100',
    SEVEN_AGAINST_THREE = '满700返300'
}

export class Context {
    strategy: Strategy;

    constructor(standard: string, price: number, amount: number){
        switch (standard) {
            case DiscountType.FIVE_DISCOUNT:
                this.strategy = new StrategyDiscount(price, amount).init(0.5);
                break;
            case DiscountType.SEVEN_DISCOUNT:
                this.strategy = new StrategyDiscount(price, amount).init(0.7);
                break;
            case DiscountType.NINE_DISCOUNT:
                this.strategy = new StrategyDiscount(price, amount).init(0.9);
                break;
            case DiscountType.THREE_AGAINST_ONE:
                this.strategy = new StrategyRebates(price, amount).init(300, 100);
                break;
            case DiscountType.SEVEN_AGAINST_THREE:
                this.strategy = new StrategyRebates(price, amount).init(700, 300);
                break;
            default:
                this.strategy = new StrategyDiscount(price, amount).init(1);
                break;
        }
    }

    getStrategy(){
        return this.strategy
    }
}