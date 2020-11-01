import {Strategy} from "@/Utils/strategy/Strategy";

export class StrategyDiscount extends Strategy {
    finalMoney = 0;

    constructor(price: number, amount: number) {
        super();
        this.finalMoney = price * amount;
    }

    getResult(): number {
        return this.finalMoney;
    }

    init(factor: number){
        this.finalMoney = this.finalMoney * factor;
        return this;
    }
}