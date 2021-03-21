import {Injectable} from '@angular/core';
import {PersonSerializer} from '../../person/shared/person.serializer';
import {Family} from './family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilySerializer {
  constructor(
    private personSerializer: PersonSerializer
  ) {}

  deserialize(json: any): Family {
    const family = new Family();
    family.id = json.id;

    if (json.husband) {
      family.husband = this.personSerializer.deserialize(json.husband);
    }
    if (json.wife) {
      family.wife = this.personSerializer.deserialize(json.wife);
    }

    return family;
  }
}
