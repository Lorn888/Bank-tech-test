const BankStatement = require("./BankStatement")
const TransactionHistory = require('./TransactionHistory')

function BankAccount(balance, statement = new BankStatement()) {
this.balance = balance
this.statement = statement
}

BankAccount.prototype = {
  deposit: function(amount){
    this.balance += amount;
    this.statement.addTransaction(amount);

  },
  withdraw: function(amount){
    this.balance -= amount;
  },
  viewStatement: function(){
    return this.statement.display();
  }
}

module.exports = BankAccount