import {Injectable} from '@angular/core';
import {PersonSerializer} from '../../person/shared/person.serializer';
import {FamilyExtended} from './family.extended.model';
import {Person} from '../../person/shared/person.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyExtendedSerializer {
  constructor(
    private personSerializer: PersonSerializer
  ) {}

  deserialize(json: any): FamilyExtended {
    const family = new FamilyExtended();
    family.id = json.id;

    if (json.husband) {
      family.husband = this.personSerializer.deserialize(json.husband);
    }
    if (json.wife) {
      family.wife = this.personSerializer.deserialize(json.wife);
    }

    json.children.forEach( (child: any) => {
      family.children.push(this.personSerializer.deserialize(child));
    });

    family.events = []; // TODO Implement events
    family.files = []; // TODO Implement files

    return family;
  }
}
