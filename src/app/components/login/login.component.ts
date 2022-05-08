import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm?:FormGroup
  constructor(private _router:Router, private _formBuilder:FormBuilder, private _userServices:UserService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      Email:['',[Validators.email, Validators.maxLength(40), Validators.minLength(5), Validators.required]],
      Password:['', [Validators.maxLength(20), Validators.minLength(6), Validators.required,]]
    })
  }

  login(){
    this._userServices.login(this.loginForm?.controls['Email'].value)
    this._router.navigateByUrl('/tasks')
    // console.log(JSON.stringify(this.loginForm?.value))
  }
}
