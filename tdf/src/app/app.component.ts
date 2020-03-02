import { Component } from '@angular/core';
import {User} from './user'
import { from } from 'rxjs';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics =['Angular','React','Vue'];
  userModel = new User("","sun@com",555555,"Angular")
  constructor(private _enrollmentService:EnrollmentService){}

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log("Sucess",data),
      error => console.error('Error!',error)
      
    )
   
  }
}
