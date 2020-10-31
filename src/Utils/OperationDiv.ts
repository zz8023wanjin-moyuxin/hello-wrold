import {Operation} from "./Operation";

export class OperationDiv extends Operation{
  constructor() {
    super();
  }

  getResult(): number {
    let result = 0;
    if (this.numberB == 0) {
      return result = NaN;
    }

    result = this.numberA / this.numberB;
    return result;
  }
}
