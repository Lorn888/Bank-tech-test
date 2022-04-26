const Transaction = require('./Transaction')

describe('Transaction', ()=>{
  let transaction
  beforeEach(()=> {
    today = new Date
    jest
  .useFakeTimers()
  .setSystemTime(new Date('2022-01-01').getTime());
    transaction = new Transaction(2000, today)
    console.log(today)

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
  it('should have a date property', function() {
    expect(transaction.date).toBeDefined();
  });
  it('should have the correct date property', function() {
    expect(transaction.date).toBe(today);
  });

}) 