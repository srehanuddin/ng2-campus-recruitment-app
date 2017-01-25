import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserService } from './services/user.service';
import UserModel from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  user : UserModel;

  constructor(private userService : UserService, private store: Store<UserModel>){
    userService.firebaseIsLogin();

    store.select('appStore').subscribe((data : UserModel) => {
      console.log("data from UserObservable App Component", data);
      this.user = data;
    });

    /*
    userService.UserObservable.subscribe(data => {
      console.log("data from UserObservable", data);
      this.user = data;
    });
    */
  }

  logout(){
    this.userService.firebaseLogout();
  }
}
