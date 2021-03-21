import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { PersonComponent } from './person/person.component';
import { FamilyComponent } from './family/family.component';
import { StubComponent } from './stub/stub.component';
import { PersonSimpleLinkComponent } from './person-simple-link/person-simple-link.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FamilyComponent,
    StubComponent,
    PersonSimpleLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
