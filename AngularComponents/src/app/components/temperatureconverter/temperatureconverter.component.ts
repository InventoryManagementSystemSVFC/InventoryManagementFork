import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatureconverter',
  templateUrl: './temperatureconverter.component.html',
  styleUrl: './temperatureconverter.component.css'
})
export class TemperatureconverterComponent {

  celsius: number | null = null;
  fahrenheit: number | null = null;

  CelsiusToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    }
  }

  FahrenheitToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5/9;
    }
  }




}
