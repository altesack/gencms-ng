import {Person} from '../../person/shared/person.model';

export class Family {
  id = 0;
  husband: Person|undefined = undefined;
  wife: Person|undefined = undefined;

  fullnameOfWife(): string{
    if (this.wife){
      return this.wife.fullname();
    }

    return 'unknown';
  }

  fullnameOfHusband(): string{
    if (this.husband){
      return this.husband.fullname();
    }

    return 'unknown';
  }
}
