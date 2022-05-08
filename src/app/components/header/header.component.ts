import { UserService } from './../../services/user.service';
import { TaskService } from './../../services/task.service';
import { Task } from './../../models/tasks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tasksCount:number = 0
  isLogged = false
  constructor(private taskServise:TaskService, private _userService:UserService) { }

  ngOnInit(): void {
    // this.isLogged = this._userService.isLoggedIn()
    this._userService.loginStatus.subscribe(status => {
      this.isLogged = status
    })
    this.taskServise.getAll().subscribe(
      (response:any)=>{
        let tasks = response.Data as Task[]
        tasks = response.Data
        this.tasksCount = tasks.length
      },
      (error:any)=>{console.log(error)}
    )
  }

}
