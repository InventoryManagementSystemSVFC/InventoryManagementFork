import { Component } from '@angular/core';

@Component({
  selector: 'app-factorialcalculator',
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {


  result: number = 0;

  calculateFactorial(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.calculateFactorial(n - 1);
  }

  solveFactorial(factorialInput: string): void {
    const num = parseInt(factorialInput, 10);
    if (!isNaN(num) && num >= 0) {
      this.result = this.calculateFactorial(num);
    } else {
      this.result = 0;
    }
  }


}
