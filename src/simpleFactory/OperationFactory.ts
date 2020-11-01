import {Operation} from "../Utils/operation/Operation";
import {OperationAdd} from "../Utils/operation/OperationAdd";
import {OperationSub} from "../Utils/operation/OperationSub";
import {OperationMul} from "../Utils/operation/OperationMul";
import {OperationDiv} from "../Utils/operation/OperationDiv";

export class OperationFactory {
  static createOperation (operate: string): Operation|null {
    let opera: Operation|null = null;

    switch (operate) {
      case '+':
        opera = new OperationAdd();
        break;
      case '-':
        opera = new OperationSub();
        break;
      case '*':
        opera = new OperationMul();
        break;
      case '/':
        opera = new OperationDiv();
        break;
    }

    return opera;
  }
}
