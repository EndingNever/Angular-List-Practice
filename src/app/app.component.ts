import { AccountsService } from './accounts.service';
import { clickService } from './clickService.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [clickService, AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor (private accountsService: AccountsService){}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }



}
