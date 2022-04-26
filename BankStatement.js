const TransactionHistory = require("./TransactionHistory")

function BankStatement(history = new TransactionHistory()) {
  this.history = history
}

module.exports = BankStatement