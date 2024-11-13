// test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const { expect } = chai;
chai.use(chaiHttp);

describe('GET /inicio', () => {
  it('should return a greeting message', (done) => {
    chai
      .request(app)
      .get('/inicio')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Hola, Mundo!');
        done();
      });
  });
});
