import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {


  newItem: string = ''; 
  listItems: string[] = []; 

  addItem() {
    if (this.newItem) {
      this.listItems.push(this.newItem);
      this.newItem = ''; 
    }
  }

  removeItem(index: number) {
    this.listItems.splice(index, 1); 
  }

}
