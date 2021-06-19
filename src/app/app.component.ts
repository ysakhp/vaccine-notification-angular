import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { User } from './model/user';
import { UserService } from './services/user.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vaccine notification';

  alert: boolean = false
  ageGroupHasError = true;
  userModel = new User()



  constructor(private userService: UserService, http: HttpClientModule, private titleService: Title) {
    this.setTitle()
    this.userModel.ageGroup = 0;
  }

  ngOnInit() {
    this.setTitle
  }

  public setTitle() {
    this.titleService.setTitle(this.title)

  }

  registerUser() {
    console.log('Submitted');
    // this.alert=true
    // this.userService.enroll(this.userModel).subscribe(
    //   data => this.alert =true ,
    //   error => this.alert=false
    // )
  }

  closeAlert() {
    this.alert = false
  }

  onSubmit() {
    // console.log('Submitted');

  }
  validateAgeGroup(value: number) {

    if (value == 0) {

      this.ageGroupHasError = true;
    } else {

      this.ageGroupHasError = false;
    }

  }
}
