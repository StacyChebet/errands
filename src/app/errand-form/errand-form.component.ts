import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Errand} from '../errand';

@Component({
  selector: 'app-errand-form',
  templateUrl: './errand-form.component.html',
  styleUrls: ['./errand-form.component.css']
})
export class ErrandFormComponent implements OnInit {
  newErrand = new Errand(0, '', '', new Date ());
  @Output () addErrand = new EventEmitter<Errand> ();

    submitErrand() {
      this.addErrand.emit(this.newErrand);
    }

  constructor() { }

  ngOnInit() {
  }

}
