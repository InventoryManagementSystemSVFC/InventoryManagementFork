import { Component } from '@angular/core';

@Component({
  selector: 'app-usergreeting',
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {


  name: string = "";
  isVisible: boolean = false;

  messageGreet() { 

    this.isVisible = true;

  }


}
