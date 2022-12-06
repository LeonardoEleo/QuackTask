import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

import { Task } from '../Task';

import { environment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}/api/task`

  constructor(private http: HttpClient) { }

createTask(formData: FormData): Observable<FormData> {
  return this.http.post<FormData>(this.apiUrl, formData);
}

}
