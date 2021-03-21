import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';
import {PersonExtended} from './person.extended.model';
import { catchError, map, tap } from 'rxjs/operators';
import {PersonExtendedSerializer} from './person.extended.serializer';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  getPersonUrl = environment.backendApiUrl + '/api/person';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private personExtendedSerializer: PersonExtendedSerializer
  ) {}

  getPerson(id: string): Observable<PersonExtended> {
    return this.http.get<PersonExtended>(`${this.getPersonUrl}/${id}` )
      .pipe(
        map((res: PersonExtended) => {
          return this.deserializePerson(res);
        })
      )
      ;
  }

  private deserializePerson(json: any): PersonExtended{
    return this.personExtendedSerializer.deserialize(json);
  }
}


