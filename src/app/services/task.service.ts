import { Task } from './../models/tasks';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _httpClient:HttpClient) { }
  getAll() :Observable<any> {
    return this._httpClient.get('https://api.mohamed-sadek.com/Task/Get')
  }

  getByID(id:number) :Observable<any> {
    return this._httpClient.get(`https://api.mohamed-sadek.com/Task/GetByID?id=${id}`)
  }

  create(task:Task) :Observable<any> {
    return this._httpClient.post('https://api.mohamed-sadek.com/Task/POST', task)
  }

  update(task:Task) :Observable<any> {
    return this._httpClient.put('https://api.mohamed-sadek.com/Task/PUT', task)
  }

  delete(id:number) :Observable<any> {
    return this._httpClient.delete(`https://api.mohamed-sadek.com/Task/delete?id=${id}`)
  }

}
