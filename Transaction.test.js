const Transaction = require('./Transaction')

describe('Transaction', ()=>{
  let transaction
  beforeEach(()=> {
    transaction = new Transaction(2000)
  })
  test('should be defined', ()=> {
    expect(transaction instanceof(Transaction)).toBe(true)
  })
  test('should have amount property', ()=> {
    expect(transaction.amount).toBeDefined()
  })
  test('should return amount property', ()=> {
    expect(transaction.amount).toBe(2000)
  })

}) 