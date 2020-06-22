import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  @Output() counterChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseButtonClicked() {
    this.counter = this.counter + 1;
    this.counterChange.emit(this.counter);
  }

}
