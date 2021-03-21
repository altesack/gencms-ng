import {Family} from '../../family/shared/family.model';
import {Person} from './person.model';


export class PersonExtended extends Person{
  description = '';
  bornInFamily: Family|undefined = undefined;
  husbandInFamilies: Family[] = [];
  wifeInFamilies: Family[] = [];
  events = []; // TODO Implement events
  files = []; // TODO Implement files
}



