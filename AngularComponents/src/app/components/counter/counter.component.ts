import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  number: number = 0;

  counter() { 

     this.number = this.number + 1;

  }


}
