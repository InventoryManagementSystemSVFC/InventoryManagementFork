import { Component } from '@angular/core';

@Component({
  selector: 'app-bmisolver',
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {


  height: number = 0;
  weight: number = 0;
  bmi: number | null = null;

  calculateBMI(): void {
    if (this.height > 0 && this.weight > 0) {
      const heightInMeters = this.height / 100; // Convert height from cm to meters
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    } else {
      this.bmi = null;
    }
  }

}
