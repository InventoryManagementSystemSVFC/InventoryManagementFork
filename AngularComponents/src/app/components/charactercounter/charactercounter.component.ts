import { Component } from '@angular/core';

@Component({
  selector: 'app-charactercounter',
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {


  text: string = '';
  charLength: number = 0; // Set the maximum length you want

  get remainingChars(): number {
    return this.charLength  +  this.text.length;
  }

}
