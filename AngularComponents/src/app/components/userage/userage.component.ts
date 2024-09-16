import { Component } from '@angular/core';

@Component({
  selector: 'app-userage',
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {

  year: number = new Date().getFullYear(); 
  age: number = 0;

  calculateAge() { 

    return this.age = (this.age - this.year);
    
  }


}
