import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NewAccountsComponent } from './new-accounts/new-accounts.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NewAccountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
