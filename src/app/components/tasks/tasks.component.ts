import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './../../services/task.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  name: string = "Ahmed Ashraf"
  tasks: Task[] = []
  taskFrom?:FormGroup //Reactive Forms
  isPageLoaded: boolean = true

  constructor(private taskService: TaskService,
     private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //Reactive Forms
    this.taskFrom = this._formBuilder.group({
      addTask:['',[Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    })
    this.taskService.getAll().subscribe(
      (response: any) => {
        this.tasks = response.Data
        this.isPageLoaded = false
      },
      (error: any) => { console.log(error) }
    )
  }

  addTask(title: string) {
    let task = new Task()
    task.Title = title
    this.taskService.create(task).subscribe(
      (response: any) => {
        task.ID = response.Data
        this.tasks.push(task)
      },
      (error: any) => { console.log(error) }
    )
  }

  updateTask(task: Task) {
    task.IsDone = !task.IsDone
    this.taskService.update(task).subscribe(
      (response: any) => { },
      (error: any) => { task.IsDone = !task.IsDone }
    )
  }

  deleteTask(index: number) {
    let tasks = this.tasks[index]
    this.taskService.delete(tasks.ID).subscribe(
      (response) => { this.tasks.splice(index, 1) },
      (error) => { console.log(error) }
    )
  }
  getPendingTasks(): number {
    return this.tasks.filter(tasks => !tasks.IsDone).length
  }
}
