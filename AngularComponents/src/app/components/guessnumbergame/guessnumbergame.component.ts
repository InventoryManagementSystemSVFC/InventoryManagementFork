import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {


  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  userGuess: any = null;
  message: string = '';
  isVisible: boolean = false;

  checkGuess(): void {
    if (this.userGuess === this.randomNumber) {
      this.message = 'Congratulations! You guessed it right!';
    } else if (this.userGuess > this.randomNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = 'Too low! Try again.';
    }

    this.isVisible = true;
  }

    


}
