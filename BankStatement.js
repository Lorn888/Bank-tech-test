const TransactionHistory = require("./TransactionHistory")

let HEADERS = 'date       || credit  || debit  || balance';

function BankStatement(history = new TransactionHistory()) {
  this.history = history
}

BankStatement.prototype = {
  addTransaction: function(amount){
    this.history.addTransaction(amount);
  },
  display: function(){
    var display = HEADERS + '\n'
    this.history.transactions.forEach(function(element) {
      display += formatDate(element.date);
    });
    return display;
  }
};

function formatDate(date){
  var day   = (date.getDate()).toString();
  var month = (date.getMonth() + 1).toString();
  var year  = (date.getFullYear()).toString();
  if (day.length == 1) {
    day = "0" + day;
  }
  if (month.length == 1) {
    month = "0" + month;
  }
  return day + '/' + month + '/' + year;
}

module.exports = BankStatement