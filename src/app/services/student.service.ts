import { Student } from './../models/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpReqClient: HttpClient) { }
  getAll(): Observable<any> {
    return this._httpReqClient.get('https://api.mohamed-sadek.com/Student/Get')
  }
  create(student:Student): Observable<any> {
    return this._httpReqClient.post('https://api.mohamed-sadek.com/Student/POST', student)
  }
  delete(index:number): Observable<any> {
    return this._httpReqClient.delete(`https://api.mohamed-sadek.com/Student/delete?id=${index}`)
  }
}
