import { Component } from '@angular/core';

@Component({
  selector: 'app-showhellobutton',
  templateUrl: './showhellobutton.component.html',
  styleUrl: './showhellobutton.component.css'
})


export class ShowhellobuttonComponent {

    
  message: string = "Hello World";
  isVisible: boolean = false;

  showMessage() { 
    
    this.isVisible = true;

  }

}
