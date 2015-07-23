import CalculatorLogic from './CalculatorLogic'

class ViewController {
  constructor() {
    this.logic = new CalculatorLogic()
    console.log(this.logic.getOpStackAsString())
  }
}

let viewController = new ViewController()
