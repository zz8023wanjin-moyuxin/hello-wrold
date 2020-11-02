import {CashSuper} from "@/Utils/cash/CashSuper";
import {CashRebates} from "@/Utils/cash/CashRebates";
import {CashReturn} from "@/Utils/cash/CashReturn";
import {CashNormal} from "@/Utils/cash/CashNormal";

export enum DiscountType {
    FIVE_DISCOUNT = '打五折',
    SEVEN_DISCOUNT = '打七折',
    NINE_DISCOUNT = '打九折',
    THREE_AGAINST_ONE = '满300返100',
    SEVEN_AGAINST_THREE = '满700返300'
}

export class CashContext {
    cs: CashSuper;

    constructor(standard: string){
        switch (standard) {
            case DiscountType.FIVE_DISCOUNT:
                this.cs = new CashRebates(0.5);
                break;
            case DiscountType.SEVEN_DISCOUNT:
                this.cs = new CashRebates(0.7);
                break;
            case DiscountType.NINE_DISCOUNT:
                this.cs = new CashRebates(0.9);
                break;
            case DiscountType.THREE_AGAINST_ONE:
                this.cs = new CashReturn(300, 100);
                break;
            case DiscountType.SEVEN_AGAINST_THREE:
                this.cs =  new CashReturn(700, 300);
                break;
            default:
                this.cs = new CashNormal();
                break;
        }
    }

    getResult(money: number){
        return this.cs.acceptCash(money);
    }
}
