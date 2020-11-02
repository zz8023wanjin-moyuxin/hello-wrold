import {CashSuper} from "@/Utils/cash/CashSuper";

export class CashNormal extends CashSuper{
  public acceptCash(money: number) {
    return money;
  }
}
