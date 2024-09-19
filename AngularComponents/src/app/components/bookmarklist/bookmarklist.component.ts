import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarklist',
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})

export class BookmarklistComponent {

  bookmarks = [
    { name: 'Facebook', url: 'https://facebook.com/' },
    { name: 'Instagram', url: 'https://www.instagram.com/' },
    { name: 'Linkin', url: 'https://www.linkedin.com/' },
    { name: 'Stack Overflow (Angular)', url: 'https://stackoverflow.com/questions/tagged/angular' }
  ];

  // Function to add a new bookmark
  addList(name: string, url: string) {
    this.bookmarks.push({ name, url });
  }

  // Function to remove a bookmark
  removeList(index: number) {
    this.bookmarks.splice(index, 1);
  }


}
