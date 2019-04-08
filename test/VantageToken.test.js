const BigNumber = web3.BigNumber;

const VantageToken = artifacts.require('VantageToken');

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('VantageToken', accounts => {
  const _name = 'Vantage Token';
  const _symbol = 'VANT';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await VantageToken.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});
