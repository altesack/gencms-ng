import {Person} from './person.model';
import {Injectable} from '@angular/core';
import {PersonExtended} from './person.extended.model';
import {Family} from '../../family/shared/family.model';
import {FamilySerializer} from '../../family/shared/family.serializer';

@Injectable({
  providedIn: 'root'
})
export class PersonSerializer {

  deserialize(json: any): Person {
    const person = new Person();
    person.id = json.id;
    person.name = json.name;
    person.surname = json.surname;
    person.sex = json.sex;

    return person;
  }
}
