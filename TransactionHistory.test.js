const TransactionHistory = require('./TransactionHistory')

describe('TransactionHistory', ()=>{
  
  let transactionHistory
  let today
  let yesterday
  let transactions
  beforeEach(()=> {
    transactionHistory = new TransactionHistory(transactions)
    today = new Date
    yesterday = new Date('2022-02-01')

    jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-02-02').getTime());
  })
  test('should be a defined', ()=> {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });
  test('should have trnsactions property', ()=> {
    expect(transactionHistory.transactions).toBeDefined()
  })
})
