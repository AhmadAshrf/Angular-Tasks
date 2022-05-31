<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToTasksComponent(){
    this.router.navigate(['/tasks'])
  }
=======
  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> 3c4fa85e6edcaf114d4136517211051241069621

}
