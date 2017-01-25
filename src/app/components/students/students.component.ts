import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { AccountsService } from '../../services/accounts.service';
import UserModel, { UserType } from "../../models/user.model";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  accounts : FirebaseListObservable<any[]>

  constructor(private accountService : AccountsService) {

    accountService.fetchAccounts(UserType.Student)
    this.accounts = accountService.accounts;

  }

  ngOnInit() {
  }

}
