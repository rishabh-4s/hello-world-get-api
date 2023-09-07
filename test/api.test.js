const request = require('supertest');
const chai = require('chai');
const app = require('../index'); // Import your Express app

const expect = chai.expect;

describe('API Tests', () => {
  it('should return "Hello, World!" when accessing /api/hello', (done) => {
    request(app)
      .get('/api/hello')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).to.equal('Hello, World!');
        done();
      });
  });
});
