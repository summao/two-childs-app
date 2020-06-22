import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'two-childs-app';
  count = 0;

  onCounterChanged(count) {
    console.log(count);
    this.count = count;
  }
}
