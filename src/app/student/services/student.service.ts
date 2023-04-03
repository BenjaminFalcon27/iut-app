import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/students';
import { environment } from './../../../environments/environment';

@Injectable()
export class StudentService {

  constructor(private http: HttpClient) {
  }
  get() : Observable<Student[]>{
    return this.http.get<Student[]>(environment.iutApiBaseUrl+"/students");
  }

  getById(id: number) : Observable<Student>{
    return this.http.get<Student>(environment.iutApiBaseUrl+"/students/"+id);
  }

  post(student: Student) : Observable<Student>{
    return this.http.post<Student>(environment.iutApiBaseUrl+"/students", student);
  }

  delete(id: number) : Observable<any>{
    return this.http.delete(environment.iutApiBaseUrl+"/students/"+id);
  }

  update(student: Student): Observable<string>{
    return this.http.put<string>(environment.iutApiBaseUrl+"/students/"+student.id, student);
  }

  create(student: Student): Observable<string>{
    return this.http.post<string>(environment.iutApiBaseUrl+"/students", student);
  }
}
