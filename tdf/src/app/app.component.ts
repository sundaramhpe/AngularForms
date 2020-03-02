import { Component } from '@angular/core';
import {User} from './user'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics =['Angular','React','Vue'];
  userModel = new User("","sun@com",555555,"Angular")

  onSubmit(){
    console.log(this.userModel);
  }
}
