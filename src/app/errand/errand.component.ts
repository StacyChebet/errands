import { Component, OnInit } from '@angular/core';
import {Errand} from '../errand';

@Component({
  selector: 'app-errand',
  templateUrl: './errand.component.html',
  styleUrls: ['./errand.component.css']
})
export class ErrandComponent implements OnInit {
  errands = [
    new Errand(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son', new Date (2019, 3, 14)),
    new Errand(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date (2019, 6, 9)),
    new Errand(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date (2019, 1, 12)),
    new Errand(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date (2019, 0, 18)),
    new Errand(5, 'Solve math homework', 'Damn Math', new Date (2019, 2, 14)),
    new Errand(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date (2019, 3, 14)),
];

  addNewErrand(errand) {
    const errandLength = this.errands.length;
    errand.id = errandLength + 1;
    errand.completeDate = new Date (errand.completeDate);
    this.errands.push (errand);
  }
  toggleDetails (index) {
    this.errands[index].showDescription = !this.errands [index].showDescription;
  }

  deleteErrand (isComplete, index) {
    if (isComplete) {
      this.errands.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
