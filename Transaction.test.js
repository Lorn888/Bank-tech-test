const Transaction = require('./Transaction')

describe('Transaction', ()=>{
  let transaction
  beforeEach(()=> {
    transaction = new Transaction()
  })
  test('should be defined', ()=> {
    expect(transaction instanceof(Transaction)).toBe(true)
  })
}) 