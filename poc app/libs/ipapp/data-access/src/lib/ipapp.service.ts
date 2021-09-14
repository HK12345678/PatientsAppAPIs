import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPatientRecord } from './+state/ui.models';

@Injectable({
  providedIn: 'root'
})

export class IpappService {
  private API_URL = 'https://localhost:44338';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<{ records: IPatientRecord[] }>(`${this.API_URL}/api/GetPatientsList`)
      .pipe(
        map(response => {
          return response.records.map((record, index) => {
            return {
              //id: index,
              ...record
            };
          });
        })
      );
  }
}
