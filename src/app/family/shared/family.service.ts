import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {environment} from '../../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import {FamilyExtendedSerializer} from './family.extended.serializer';
import {FamilyExtended} from './family.extended.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  getPersonUrl = environment.backendApiUrl + '/api/family';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private familyExtendedSerializer: FamilyExtendedSerializer
  ) {}

  getFamily(id: string): Observable<FamilyExtended> {
    return this.http.get<FamilyExtended>(`${this.getPersonUrl}/${id}` )
      .pipe(
        map((res: FamilyExtended) => {
          return this.deserializePerson(res);
        })
      )
      ;
  }

  private deserializePerson(json: any): FamilyExtended{
    return this.familyExtendedSerializer.deserialize(json);
  }
}
