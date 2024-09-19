import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simplelogin',
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {

  givenUname: string = "r.kelvin";
  givenEmail: string = "rk@gmail.com";

  validMessage: string = "You are logged in";
  invalidMessage: string = "Invalid credentials";

  username: string = "";
  email: string= "";

  message: string = '';

  submitForm(form : NgForm) {


    if (this.username === this.givenUname && this.email === this.givenEmail) {
       this.message = this.validMessage;
      // console.log(this.message);
      
    } else {
      this.message = this.invalidMessage;
      // console.log(this.message);

    }
  }
  
}
