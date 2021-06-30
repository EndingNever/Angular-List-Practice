export class AccountsService {
  accounts: any = [
    {
      name: "Master Account",
      status: "Active"
    },
    {
      name: "Assistant Master Account",
      status: "Assistant to the Master Account"
    },
    {
      name: "Ben",
      status: "chillin' "
    },
    {
      name: "Lancia Stratos",
      status: "In a Race"
    }
  ];

  onAddAccount(name: any, status: string) {
    this.accounts.push({name, status})
    console.log(this.accounts)
  }

  onDeleteAccount(id:number){
    this.accounts.splice(id, 1)
  }

}
