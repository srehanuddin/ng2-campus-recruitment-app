import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Store } from '@ngrx/store';
import { AccountsService } from '../../services/accounts.service';
import UserModel, { UserType } from "../../models/user.model";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  accounts : FirebaseListObservable<any[]>
  user : UserModel;

  constructor(private accountService : AccountsService, private store: Store<UserModel>) {

    accountService.fetchAccounts(UserType.Company)
    this.accounts = accountService.accounts;

    store.select('appStore').subscribe((data : UserModel) => {
        this.user = data;
    });

  }

  ngOnInit() {
  }

  delete(key : string){
    console.log("key : ", key);
    this.accountService.deleteAccount(key)
  }
}
