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

  onAdd(nameValue: string, statusValue: string) {
    this.accountsServices.onAddAccount(nameValue, statusValue);
    this.nameInput='';
    this.statusInput='';
  }
}
