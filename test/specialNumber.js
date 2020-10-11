const SpecialNumber = artifacts.require('SpecialNumber');

contract('SpecialNumber', () => {
  it('The constructor should set the initial mainNumber value to 0', async () => {
    let specialNumber = await SpecialNumber.deployed();
    let initialValue = await specialNumber.mainNumber.call();
    assert.equal(initialValue, 0, 'The initial value is not correct');
  });

  it('incrementMainNumber() should increment the mainNumber by 1', async () => {
    let specialNumber = await SpecialNumber.deployed();
    await specialNumber.incrementMainNumber();
    let incrementedNumber = await specialNumber.mainNumber.call();
    assert.equal(incrementedNumber, 1, 'The incremented value should be 1');
  });
});
