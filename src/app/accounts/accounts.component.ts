import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: []
})
export class AccountsComponent implements OnInit {
  @Input()
    account!: { name: string; status: string; };
  @Input()
    id!: number;
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

}
