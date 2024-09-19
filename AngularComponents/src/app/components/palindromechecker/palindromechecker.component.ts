import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromechecker',
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {

  
  inputText: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const normalText = this.inputText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = normalText.split('').reverse().join('');
   
    this.isPalindrome = normalText === reversedText;
  }


}
