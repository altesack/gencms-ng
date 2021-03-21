import {Person} from './person.model';
import {Injectable} from '@angular/core';
import {PersonExtended} from './person.extended.model';
import {Family} from '../../family/shared/family.model';
import {FamilySerializer} from '../../family/shared/family.serializer';

@Injectable({
  providedIn: 'root'
})
export class PersonExtendedSerializer {
  constructor(
    private familySerializer: FamilySerializer
  ) {}

    deserialize(json: any): PersonExtended {
      const person = new PersonExtended();
      person.id = json.id;
      person.name = json.name;
      person.surname = json.surname;
      person.sex = json.sex;
      person.description = json.description;

      if (json.bornInFamily) {
        person.bornInFamily = this.familySerializer.deserialize(json.bornInFamily);
      }

      json.husbandInFamilies.forEach( (family: any) => {
        person.husbandInFamilies.push(this.familySerializer.deserialize(family));
      });

      json.wifeInFamilies.forEach( (family: any) => {
        person.wifeInFamilies.push(this.familySerializer.deserialize(family));
      });

      person.events = []; // TODO Implement events
      person.files = []; // TODO Implement files

      return person;
    }
}
