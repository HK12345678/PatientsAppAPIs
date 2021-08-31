import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '@sample/data';


@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent 
{
  todos: Patient[] = [];
  title = 'patients-app';

  constructor(private http: HttpClient) 
  {
    this.fetch();
  }

  fetch() 
  {
    //this.http.get<Patient[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() 
  {
    this.http.post('/api/addTodo', {}).subscribe(() => 
    {
      this.fetch();
    });
  }
}
