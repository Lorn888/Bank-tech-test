const BankStatement = require("./BankStatement")

function BankAccount(balance, statement = new BankStatement()) {
this.balance = balance
this.statement = statement
}

module.exports = BankAccount