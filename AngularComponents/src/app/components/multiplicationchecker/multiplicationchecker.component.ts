import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationchecker',
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {


  firstNumber: number | null = null;
  secondNumber: number | null = null;
  isMultiple: boolean | null = null;

  checkMultiple(): void {
    if (this.firstNumber !== null && this.secondNumber !== null && this.secondNumber !== 0) {
      this.isMultiple = this.firstNumber % this.secondNumber === 0;
    } else {
      this.isMultiple = null; // Reset if input is invalid
    }
  }

}
