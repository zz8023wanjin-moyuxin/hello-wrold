import {Operation} from "./Operation";

export class OperationSub extends Operation{
  constructor() {
    super();
  }

  getResult(): number {
    let result = 0;
    result = this.numberA - this.numberB;
    return result;
  }
}
