const SpecialNumber = artifacts.require('SpecialNumber');

module.exports = function (deployer) {
  deployer.deploy(SpecialNumber);
};
