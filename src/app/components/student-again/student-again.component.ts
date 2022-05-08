import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-again',
  templateUrl: './student-again.component.html',
  styleUrls: ['./student-again.component.scss']
})
export class StudentAgainComponent implements OnInit {

  studentRate:number = 3
  constructor() { }

  ngOnInit(): void {
  }

  onStudentRateChanged(rate:number){
    this.studentRate = rate
  }

}
