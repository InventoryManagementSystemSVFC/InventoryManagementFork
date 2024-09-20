import { Component } from '@angular/core';

@Component({
  selector: 'app-uppercaseconverter',
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {

  inputString: string = '';
  uppercaseString: string = '';

  convertToUppercase(): void {
    this.uppercaseString = this.inputString.toUpperCase();
  }


}
