const BankAccount = require('./BankAccount')

describe('BankAccount', ()=> {
    let bankAccount
  beforeEach(()=> {
    bankAccount = new BankAccount()
    
  })

  test('should be a defined ', ()=> {
    expect(bankAccount instanceof(BankAccount)).toBe(true);
  });
})