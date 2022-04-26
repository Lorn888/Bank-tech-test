const BankAccount = require('./BankAccount')
const BankStatement = require('./BankStatement')
const TransactionHistory = require('./TransactionHistory')
const Transaction = require('./Transaction')


describe('BankAccount', ()=> {
    let bankAccount
    let bankStatement
    let today
    let yesterday
    let transactions
    let transactionHistory
  beforeEach(()=> {
    bankAccount = new BankAccount(4000, bankStatement)
    bankStatement = new BankStatement(transactionHistory);
    transactionHistory = new TransactionHistory(transactions)
    jest
    .useFakeTimers()
    .setSystemTime(new Date('2022-02-02').getTime());
    today = new Date
    yesterday = new Date('2022-02-01')

    transactions = [
      new Transaction(3000, today),
      new Transaction(2000, yesterday)
    ]

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
  test('should have a statement property', ()=> {
    expect(bankAccount.statement).toBeDefined();
  });

  test('should have the correct statement property', ()=> {
    expect(bankAccount.statement).toStrictEqual(bankStatement);
  });

  
  describe('#deposit', ()=> {
    test('should increase the balance', ()=> {
      bankAccount.deposit(1000.00);
      expect(bankAccount.balance).toEqual(5000.00);
    });

    
  });
  describe('#withdraw', ()=> {
    it('should decrease the balance', ()=> {
      bankAccount.withdraw(100.00);
      expect(bankAccount.balance).toEqual(3900.00);
    });
  });


})