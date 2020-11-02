import {CashSuper} from "@/Utils/cash/CashSuper";

export class CashRebates extends CashSuper {
    private readonly moneyRebates: number = 1;

    constructor(moneyRebates: number) {
        super();
        this.moneyRebates = moneyRebates;
    }

    acceptCash(money: number): number {
        return money * this.moneyRebates
    }
}
