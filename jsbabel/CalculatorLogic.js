export default class CalculatorLogic {
  constructor() {
    this.opStack = ['foo', 'bar']
  }

  getOpStackAsString() {
    for (let op of this.opStack) {
      console.log("Op is ", op);
    }
    return `OpStack is ${this.opStack}`
  }
}
