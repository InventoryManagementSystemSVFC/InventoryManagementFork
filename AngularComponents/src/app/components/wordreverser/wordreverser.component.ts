import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})


export class WordreverserComponent {

  isVisible: boolean = false;
  revWord: string = "";

  wordReverser(reverseWord: string) {
    return reverseWord.split('').reverse().join('');


  }


    reverseFunction() {

      this.isVisible = true;

    }


} 