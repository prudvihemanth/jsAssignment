const request = require('request');
const { assert } = require('chai');

const baseurl = 'http://localhost:8000/v1/';

describe('Api EndPoints Testing', () => {
  describe('baseRoute', () => {
    it('returns status code 404', (done) => {
      request.get(baseurl, (error, response) => {
        assert.equal(404, response.statusCode);
        done();
      });
    });
  });

  describe('getAllcustomers', () => {
    it('returns status code 200', (done) => {
      request.get(`${baseurl}Customer/getAllCustomers`, (error, response) => {
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  describe('deleteCustomer', () => {
    it('It should delete the customer based on id', (done) => {
      request.get(`${baseurl}Customer/deleteCustomer/100`, (error, response) => {
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });

  describe('updateCustomer', () => {
    it('It should fail to update the customer profile with status 400', (done) => {
      request.post('http://localhost:8000/v1/Customer/updateCustomer', {
        id: 8,
        firstName: 'kjkjkjk',
        lastName: 'lklkllk',
        dob: 'lkllklk',
        gender: 9999,
        lifetime: 90,
      }, (error, response) => {
        assert.equal(400, response.statusCode);
        done();
      });
    });
  });


  describe('customerLogin', () => {
    it('It should check the login endpoint which should return false', (done) => {
      const reqbody = { email: 'abc@gmail.com', password: 'abcdef' };
      request({
        method: 'POST',
        url: `${baseurl}Customer/login`,
        form: reqbody,
      }, (error, response) => {
        assert.equal(200, response.statusCode);
        done();
      });
    });
  });
});

