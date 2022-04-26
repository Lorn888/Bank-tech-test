const BankStatement = require("./BankStatement");

describe('BankStatement', ()=> {
  let bankStatement
  beforeEach(()=> {
    bankStatement = new BankStatement();
  });
  test('should be defined', ()=> {
    expect(bankStatement instanceof(BankStatement)).toBe(true)
  })
})