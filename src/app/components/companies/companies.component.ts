import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs';
import { AccountsService } from '../../services/accounts.service';
import UserModel, { UserType } from "../../models/user.model";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  accounts : FirebaseListObservable<any[]>

  constructor(private accountService : AccountsService) {

    accountService.fetchAccounts(UserType.Company)
    this.accounts = accountService.accounts;

  }

  ngOnInit() {
  }

}
