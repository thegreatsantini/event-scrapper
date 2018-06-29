const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');
const app = require('../server');


describe('GET /', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/').expect(200, done);
    });
});

describe('GET /stanford', function () {
    it('should return a 200 respone', function (done) {
        request(app).get('/api/v1/stanford').expect(200, done)
    })
    it('should return an array', function (done) {
        request(app).get('/api/v1/stanford').end(function (err, res) {
            expect(res.body).to.be.an('array')
            done();
        })
    })
    it('should return an array with data', function (done) {
        request(app).get('/api/v1/stanford').end(function (err, res) {
            expect(res.body).to.not.be.empty
            done();
        })
    })
    it('should contain objects', function () {
        request(app).get('/api/v1/stanford').end(function (err, res) {
            expect(res.body).to.include.members({});
            done();
        })
    })
    it('should all be objects', function () {
        request(app).get('/api/v1/stanford').end(function (err, res) {
            for ( let i = 0; i < res.body.length; i++ ) {
                expect(res.body[i]).to.be.an('object')
                done();
            }
        })
    })
});

describe('GET /meetup', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/api/v1/meetup').expect(200);
        done();
    })
    it('should return an array', function () {
        request(app).get('/api/v1/meetup').end(function (err, res) {
            expect(res.body).to.be.an('array');
            done();
        })
    })
    it('should not be empty', function () {
        request(app).get('/api/v1/meetup').end(function (err, res) {
            expect(res.body).to.not.be.empty;
            done();
        })
    })
    // it('should contain objects', function () {
        request(app).get('/api/v1/meetup').end(function (err, res) {
            console.log(res.body) // why isnt this logging? 
            // expect(res.body).to.include.members({});
            // done();
        // })
    })
})

describe('GET /eventbright', function () {
    it('should return a 403 response', function (done) {
        request(app).get('/api/v1/eventbright').expect(403);
        done(); // done works more reliably when writen this way
    })
});

