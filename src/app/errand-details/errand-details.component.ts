import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Errand} from '../errand';

@Component({
  selector: 'app-errand-details',
  templateUrl: './errand-details.component.html',
  styleUrls: ['./errand-details.component.css']
})
export class ErrandDetailsComponent implements OnInit {

  @Input () errand: Errand;
  @Output () isComplete = new EventEmitter<boolean> ();

 errandDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
