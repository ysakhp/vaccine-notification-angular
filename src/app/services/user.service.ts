
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from 'src/app/model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly APIURL = "http://www.vaccinationnotification.online:8081/api"; 

   constructor(private http:HttpClient) {

     

    }

   enroll(user:User){
     
     return  this.http.post<any>(this.APIURL + '/users', user)
   }

  // addUser(user: User) : Observable<any>{
  //     // this.http.post(this.APIURL+'users/',user)
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(user);
  //   console.log(body)
  //   return this.http.post(this.APIURL + 'users/', body,{'headers':headers})
  // }
}
