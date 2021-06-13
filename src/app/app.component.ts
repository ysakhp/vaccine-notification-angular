import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vaccine-notification-angular';

  userModel = new User()
  

  constructor(private userService: UserService ,http :HttpClientModule){
      
  }

  registerUser(){
    console.log('Sumbitted '+this.userModel.email)
    this.userService.enroll(this.userModel).subscribe(
      data => console.log('Success',data),
      error => console.error('Error',error)
    )
  }
}
