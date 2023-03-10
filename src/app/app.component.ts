import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  onScroll(e) {
    if(this.boxes.length>=100) {
      console.log('No more items');
      return;
    }
    console.log('scrolled!!', e);
    const moreBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.boxes = [...this.boxes, ...moreBoxes];
  }

}
