import { Component, OnInit } from '@angular/core';
import {FamilyExtended} from './shared/family.extended.model';
import {PersonService} from '../person/shared/person.service';
import {ActivatedRoute} from '@angular/router';
import {FamilyService} from './shared/family.service';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  family: FamilyExtended;

  constructor(
    private familyService: FamilyService,
    private route: ActivatedRoute
  ) {
    this.family = new FamilyExtended();
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.familyService.getFamily(id)
        .subscribe(family => this.family = family);
    }
  }
}
