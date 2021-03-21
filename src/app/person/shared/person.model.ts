export class Person {
  id = 0;
  name = '';
  surname = '';
  sex = '';

  fullname(): string{
    return `${this.name} ${this.surname} `;
  }
}
