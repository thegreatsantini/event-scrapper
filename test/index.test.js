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
        request(app).get('/api/stanford').expect(200, done)
    })
    it('shoudl return an array', function(done){
        request(app).get('/api/stanford').end(function(err, res){
            expect(res.body).to.be.an('array');
            done()
        })
    })

    it('should return an array with data', function (done) {
        request(app).get('/api/stanford').end(function (err, res) {
            expect(res.body).to.not.be.empty
            done()
        })
    })
})

// describe('## Create task ', function () {
//     it('should create a task', function (done) {
//         request(app).post('/tasks').send(task).end(function (err, res) {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body.name).to.equal('integration test');
//             task = res.body;
//             done();
//         });
//     });
// }); 
// });

describe('GET /eventbright', function () {
    it('should return a 403 response', function (done) {
        request(app).get('/api/eventbright').expect(403, done)
    })
})

