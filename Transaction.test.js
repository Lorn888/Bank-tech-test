const Transaction = require('./Transaction')

describe('Transaction', ()=>{
  let transaction
  beforeEach(()=> {
    today = new Date
    yesterday = new Date('2022-02-01')

    jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-02-02').getTime());
    transaction = new Transaction(2000, today)

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
  test('should have a date property', ()=> {
    expect(transaction.date).toBeDefined();
  });
  test('should have the correct date property', ()=> {
    expect(transaction.date).toBe(today);
  });

}) 