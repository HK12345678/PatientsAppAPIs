import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPatientRecord } from '@papp/data';

@Component({
  selector: 'papp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  PatientRecordArray: IPatientRecord[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<IPatientRecord[]>('/api/todos').subscribe((t) =>
     (this.PatientRecordArray = t));
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
