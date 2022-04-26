const Transaction = require('./Transaction')

function TransactionHistory(transactions = []) {
this.transactions = transactions
}

TransactionHistory.prototype = {
  addTransaction: function(amount){
    let transaction = new Transaction(amount);
    this.transactions.push(transaction);
  }
};


module.exports = TransactionHistory