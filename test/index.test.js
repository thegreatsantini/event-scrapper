var expect = require('chai').expect;
var request = require('supertest');
var app = require('../server');

describe('GET /', function () {
    it('should return a 200 response', function (done) {
        request(app).get('/')
            .expect(200, done);
    });
});

// describe('GET /stanford', function(){
//     it('should return a 200 respone', function(done) {
//         request(app).get
//     })
// })

describe('GET /eventbright', function() {
    it('should return a 403 response', function (done) {
        request(app).get('/eventbright').expect(403, done)
    })
})

