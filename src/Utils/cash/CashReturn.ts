import {CashSuper} from "@/Utils/cash/CashSuper";

export class CashReturn extends CashSuper {
    private readonly moneyCondition: number;
    private readonly moneyReturn: number;


    constructor(moneyCondition: number, moneyReturn: number) {
        super();
        this.moneyCondition = moneyCondition;
        this.moneyReturn = moneyReturn;
    }

    acceptCash(money: number): number {
        if (money > this.moneyCondition) {
          return money - this.moneyReturn;
        }

        return money;
    }

}
