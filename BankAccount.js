const BankStatement = require("./BankStatement")

function BankAccount(balance, statement = new BankStatement()) {
this.balance = balance
this.statement = statement
}

BankAccount.prototype = {
  deposit: function(amount){
    this.balance += amount;
  }
};

module.exports = BankAccount