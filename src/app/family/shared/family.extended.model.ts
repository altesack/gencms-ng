import {Family} from './family.model';
import {Person} from '../../person/shared/person.model';


export class FamilyExtended extends Family{
  children: Person[] = [];
  events = []; // TODO Implement events
  files = []; // TODO Implement files
}
