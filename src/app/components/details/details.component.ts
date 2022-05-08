import { Task } from './../../models/tasks';
import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  task:Task = new Task()
  constructor(private _taskServices:TaskService, private _activatedRoute:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(param => {
      let id = Number(param.get('id'))
      this.getTaskByID(id)
    })
  }

  getTaskByID(id:number){
    this._taskServices.getByID(id).subscribe(
      (response:any)=>{
        this.task = response.Data
      },
      (error:any)=>{console.log(error.message)}
    )
  }

  
}
