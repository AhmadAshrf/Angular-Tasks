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

  constructor() { }

  ngOnInit(): void {
  }

  getPendingTasks(): number {
    return this.tasks.filter(tasks => !tasks.IsDone).length
  }

  addTask(title: string) {
    let task = new Task()
    task.title = title
    this.tasks.push(task)
  }

  updateTask(task: Task) {
    task.IsDone = !task.IsDone
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }
}
