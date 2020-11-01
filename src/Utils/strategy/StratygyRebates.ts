import {Strategy} from "@/Utils/strategy/Strategy";

export class StrategyRebates extends Strategy {
    finalMoney = 0;

    constructor(price: number, amount: number) {
        super();
        this.finalMoney = price * amount;
    }

    getResult(): number {
        return this.finalMoney;
    }

    init(fullMoney: number, returnMoney: number){
        if (this.finalMoney >= fullMoney) {
            this.finalMoney = this.finalMoney - returnMoney;
        }
        return this;
    }
}