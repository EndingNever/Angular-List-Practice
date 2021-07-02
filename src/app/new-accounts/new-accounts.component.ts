import { AccountsService } from './../accounts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-accounts',
  templateUrl: './new-accounts.component.html',
  styleUrls: ['./new-accounts.component.css'],
  providers:[]
})
export class NewAccountsComponent implements OnInit {

  nameInput:string = '';
  statusInput:string = '';
  constructor(private accountsServices: AccountsService) { }

  ngOnInit(): void {
  }

  onAdd(nameValue: string, statusValue: string) { // We call this method when we click on the button, passing along 2 arguments
    this.accountsServices.onAddAccount(nameValue, statusValue); // we are telling the accountsServices(type AccountsService, which is the service) to call the onAddAccount, passing along nameValue and statusValue
    this.nameInput=''; // resetting the input fields to empty
    this.statusInput=''; // resetting the input fields to empty
  }
}
