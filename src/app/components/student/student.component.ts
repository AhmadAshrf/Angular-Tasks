import { StudentService } from './../../services/student.service';
import { Student } from './../../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public name: string = 'Ahmed Ashraf'
  student: Student[] = []
  public isPageLoaded:boolean = true
  constructor(private studentServices:StudentService) { }

  ngOnInit(): void {
    this.studentServices.getAll().subscribe(
      (response:any) => {      
        this.student = response.Data;
        this.isPageLoaded = false
      },
      (error:any) => {console.log(error)}
    )
  }

  addStudent(firstName:string, lastName:string, mobile:string, email:string, nationalID:string, age:string){
    let studentObject = new Student()
    studentObject.firstName = firstName
    studentObject.lastName = lastName
    studentObject.Mobile = mobile
    studentObject.Email = email
    studentObject.NationalID = nationalID
    let convertedAge = parseInt(age)
    studentObject.Age = convertedAge

    this.studentServices.create(studentObject).subscribe(
      (response:any) => {
        studentObject.ID = response.Data
        this.student.push(studentObject)
      },
      (error:any) => {console.log(error)}
    )
  }

  deleteStudent(index:number){
    let studentDeleted = this.student[index]
    this.studentServices.delete(studentDeleted.ID).subscribe(
      (response:any) => {this.student.splice(index, 1)},
      (error:any) => {console.log(error)}
    )
  }
  getStudentNumber():number{
    return this.student.length
  }
}
