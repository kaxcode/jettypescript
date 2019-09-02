type depositType = (value: number) => number;

let bankAccount: { money: number; deposit: depositType } = {
  money: 2000,
  deposit: function(value: number) {
    return (this.money += value);
  }
};

let myself: {
  name: string;
  bankAccount: any;
  hobbies: string[];
} = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
