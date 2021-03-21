import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { FamilyComponent } from './family/family.component';
import { StubComponent } from './stub/stub.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'family/:id', component: FamilyComponent },
  { path: '', component: StubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
