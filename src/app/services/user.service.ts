import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginStatus = new BehaviorSubject<boolean>(this.isLoggedIn())
  constructor() { }

  login(email: string) {
    localStorage.setItem('email', email)
    this.loginStatus.next(true)
  }

  logout() {
    localStorage.removeItem('email')
    this.loginStatus.next(false)
  }
  isLoggedIn(): boolean {
    let email = localStorage.getItem('email')
    return email != null
  }
}
