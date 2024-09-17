import { Component } from '@angular/core';

@Component({
  selector: 'app-currencyconverter',
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {


  pesoAmount: number = 0;
  convertedAmount: number | null = null;
  dollarRate: number = 0.018; // 1peso = 0.018 usd



  pesoDollar() {
    if (this.pesoAmount > 0) {
      this.convertedAmount = this.pesoAmount * this.dollarRate;
    } else {
      this.convertedAmount = null;
    }
  }


}
