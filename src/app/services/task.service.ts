import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from 'src/app/Task';
import { Response } from 'src/app/Response';

import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/api/task`;

  constructor(private http: HttpClient) { }

getTasks(): Observable<Response<Task[]>> {
  return this.http.get<Response<Task[]>>(this.apiUrl);
}

createTask(formData: FormData): Observable<FormData> {
  return this.http.post<FormData>(this.apiUrl, formData);
}

check(id: number) {
  return this.http.patch<Task>(`${this.apiUrl}/${id}`, { "status": 1, "data_conclusao": new Date().toISOString().slice(0, 19).replace('T', ' ')})
}

uncheck(id: number) {
  console.log( "unchecking")
  return this.http.patch<Task>(`${this.apiUrl}/${id}`, { "status": 0})
}

getTask(id: number): Observable<Response<Task>> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Response<Task>>(this.apiUrl);
}

}
