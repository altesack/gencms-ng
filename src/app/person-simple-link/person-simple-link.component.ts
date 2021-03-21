import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person/shared/person.model';

@Component({
  selector: 'app-person-simple-link',
  templateUrl: './person-simple-link.component.html',
  styleUrls: ['./person-simple-link.component.css']
})
export class PersonSimpleLinkComponent implements OnInit {
  @Input() person?: Person;
  constructor() { }

  ngOnInit(): void {
  }

}
