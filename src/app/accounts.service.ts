export class AccountsService { // This is a service, we can use this across multiple components
  accounts: any = [   // Here is the default list which we will display, add, and delete. This is a list of objects
    {
      name: "Master Account", // name and status, where we pass the initial value  using " : "
      status: "Active"        // name and status, where we pass the initial value using " : "
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

  onAddAccount(name: any, status: string) { // The service has a method which we can call within other components, passing values from the component to here (name, status)
    this.accounts.push({name, status}) // this will push to the accounts list above the name and status we pass as arguments in the component
    // console.log(this.accounts) // this logged the whole accounts list
  }

  onDeleteAccount(id:number){
    this.accounts.splice(id, 1) // Here we will splice from the accounts the correct list item at the index provided from the component
  }

}
