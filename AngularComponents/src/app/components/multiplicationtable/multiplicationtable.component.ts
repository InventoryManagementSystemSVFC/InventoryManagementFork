import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicationtable',
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})


export class MultiplicationtableComponent {

  result: string[] = [];  // Store all results in an array
  
  calculate(multiplytable: string) {
    this.result = [];  // Clear previous results
    for (let i = 1; i <= 10; i++) {
      const result = i * parseFloat(multiplytable);
      this.result.push(`${parseFloat(multiplytable)} * ${i} = ${result}`);
    }
  }

}
