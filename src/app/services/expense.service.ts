

//this service can be used to store your items in the browser's local storage instead of an API call.
  export class ExpenseService {
    constructor() {}
  
    getItems() {
        //you can use this to get the expense items from the local storage using window.localStorage.getItem() method.
    }
  
    addItem(addItem: string) {
        //you can use this to store the expense items from the local storage using window.localStorage.setItem() method.
    }
  
    deleteItem(deleteItem) {
      //you can use this to update the storage when you delete an expense item.
    }
  }
  