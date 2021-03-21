import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonSimpleLinkComponent } from './person-simple-link.component';

describe('PersonSimpleLinkComponent', () => {
  let component: PersonSimpleLinkComponent;
  let fixture: ComponentFixture<PersonSimpleLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonSimpleLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonSimpleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
