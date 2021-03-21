import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PersonService} from './shared/person.service';
import {PersonExtended} from './shared/person.extended.model';
import {Person} from './shared/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: PersonExtended;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.person = new PersonExtended();
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id){
      this.personService.getPerson(id)
        .subscribe(person => this.person = person);
    }
  }
}
