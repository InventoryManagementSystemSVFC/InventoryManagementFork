import { Component } from '@angular/core';

@Component({
  selector: 'app-textlength',
  templateUrl: './textlength.component.html',
  styleUrl: './textlength.component.css'
})


export class TextlengthComponent {


      name: string = "";
      isVisible: boolean = false

      textLength() { 

        this.isVisible=true;
        
      }


      
}
