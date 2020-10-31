import {Operation} from "../Utils/Operation";
import {OperationAdd} from "../Utils/OperationAdd";
import {OperationSub} from "../Utils/OperationSub";
import {OperationMul} from "../Utils/OperationMul";
import {OperationDiv} from "../Utils/OperationDiv";

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
