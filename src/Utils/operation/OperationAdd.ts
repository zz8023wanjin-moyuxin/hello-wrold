import {Operation} from "./Operation";

export class OperationAdd extends Operation{
  constructor() {
    super();
  }

  getResult(): number {
    let result = 0;
    result = this.numberA + this.numberB;
    return result;
  }
}
