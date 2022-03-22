class Calculator {
  static calculate(Input: string): number {
    const correctedInput = Input.replaceAll(/(?<=[0-9])-(?=[0-9])/g, '+-');
    const PrimaryOperations = Input.split(/[0-9/*-]+/g);

    const temp = correctedInput.split(/[+]/g);
    const operated = temp.map((v) => {
      let SecundaryOperations = v.split(/[0-9-]+/g);
      let NumbersList = v
        .split(/[*/]/g)
        .filter((v) => v)
        .map((v) => Number(v));
      SecundaryOperations;
      NumbersList;
      return this.DoSecudaryOperations(NumbersList, SecundaryOperations);
    });

    operated;
    return this.DoPrimaryOperations(operated, PrimaryOperations);
  }

  private static DoPrimaryOperations(list: number[], operations: string[]): number {
    const Calculated = list.reduce((acc, el, index) => {
      if (index === 0) return el;

      return this.addition(acc, el);
      // ---
    }, 0);

    return Calculated;
  }

  private static DoSecudaryOperations(list: number[], operations: string[]): number {
    const resultTemp = list.reduce((acc: number, el: number, index: number) => {
      if (index == 0) return el;

      return operations[index] === '/'
        ? this.division(acc, el)
        : this.multiplication(acc, el);
      // ---
    }, 0);

    return resultTemp;
  }

  static addition(num1: number, num2: number): number {
    return num1 + num2;
  }

  static substraction(num1: number, num2: number): number {
    return num1 - num2;
  }

  static multiplication(num1: number, num2: number): number {
    return num1 * num2;
  }

  static division(num1: number, num2: number): number {
    return num1 / num2;
  }
  // ---
}

console.log(Calculator.calculate('-100*-5'));
