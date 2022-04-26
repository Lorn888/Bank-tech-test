const TransactionHistory = require('./TransactionHistory')

describe('TransactionHistory', ()=>{
  
  let transactionHistory
  beforeEach(()=> {
    transactionHistory = new TransactionHistory()
  })
  test('should be a defined', ()=> {
    expect(transactionHistory instanceof(TransactionHistory)).toBe(true);
  });
})
