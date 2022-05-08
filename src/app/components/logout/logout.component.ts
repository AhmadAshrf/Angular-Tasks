import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _userServise:UserService, private _router:Router) { }

  ngOnInit(): void {
    this._userServise.logout()
    this._router.navigateByUrl('/login')
  }


}
