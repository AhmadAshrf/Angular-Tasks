import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './Components/student/student.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RateComponent } from './components/rate/rate.component';
import { StudentAgainComponent } from './components/student-again/student-again.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent,
    StudentComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    DetailsComponent,
    MaxLengthPipe,
    LoginComponent,
    RateComponent,
    StudentAgainComponent,
    EmployeeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
