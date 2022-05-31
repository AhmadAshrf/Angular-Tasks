<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './../../services/task.service';
=======
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621
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
<<<<<<< HEAD
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
=======

  constructor() { }

  ngOnInit(): void {
  }

  getPendingTasks(): number {
    return this.tasks.filter(tasks => !tasks.IsDone).length
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621
  }

  addTask(title: string) {
    let task = new Task()
<<<<<<< HEAD
    task.Title = title
    this.taskService.create(task).subscribe(
      (response: any) => {
        task.ID = response.Data
        this.tasks.push(task)
      },
      (error: any) => { console.log(error) }
    )
=======
    task.title = title
    this.tasks.push(task)
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621
  }

  updateTask(task: Task) {
    task.IsDone = !task.IsDone
<<<<<<< HEAD
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
=======
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1)
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621
  }
}
