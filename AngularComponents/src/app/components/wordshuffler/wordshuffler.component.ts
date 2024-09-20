import { Component } from '@angular/core';

@Component({
  selector: 'app-wordshuffler',
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {


  inputWord: string = '';
  shuffledWord: string = '';

  shuffleLetters(word: string): string {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap letters
    }
    return letters.join('');
  }

  shuffleInputWord(): void {
    this.shuffledWord = this.shuffleLetters(this.inputWord);
  }


}
