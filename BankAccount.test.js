const BankAccount = require('./BankAccount')

describe('BankAccount', ()=> {
    let bankAccount
  beforeEach(()=> {
    bankAccount = new BankAccount(4000)
    
  })

  test('should be a defined ', ()=> {
    expect(bankAccount instanceof(BankAccount)).toBe(true);
  });
  test('should have a balance property', ()=> {
    expect(bankAccount.balance).toBeDefined();
  });

  test('should have the correct balance property', ()=> {
    expect(bankAccount.balance).toBe(4000.00);
  });

})