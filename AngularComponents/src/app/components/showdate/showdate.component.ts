import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})

export class ShowdateComponent {

  currentDate: Date = new Date();
  
  isCliked: boolean = false;

  


  showDate() { 

      if(this.isCliked == false )
      { 
        this.isCliked = true;
      }
      else { 
        this.isCliked = false;
      }



  }


}
