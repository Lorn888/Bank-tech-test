const BankStatement = require("./BankStatement");
const TransactionHistory = require("./TransactionHistory");
const Transaction = require('./Transaction')

describe('BankStatement', ()=> {
  let bankStatement
  let today
  let yesterday
  let transactions
  let transactionHistory

  beforeEach(()=> {
    bankStatement = new BankStatement(transactionHistory);
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-02-02').getTime());
    today = new Date
    yesterday = new Date('2022-02-01')
    
    transactions = [
      new Transaction(3000, today),
      new Transaction(2000, yesterday)
    ]

    transactionHistory = new TransactionHistory(transactions)

    jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-02-02').getTime());
  });
  test('should be defined', ()=> {
    expect(bankStatement instanceof(BankStatement)).toBe(true)
  })
  test('should have the transactions property', function() {
    expect(bankStatement.history).toStrictEqual(transactionHistory);
  });
})