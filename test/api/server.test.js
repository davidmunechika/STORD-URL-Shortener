process.env.NODE_ENV = 'test';
//Testing Libraries
const expect = require('chai').expect;
const request = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');
//Imports
const server = require('../../server.js');
const connectDB = require('../../db/test.js');

chai.use(chaiHttp);

describe('URL', () => {
  let body;
  beforeEach(async () => {
    await connectDB();
  });
  beforeEach((done) => {
    request(server)
      .post('/')
      .send({
        fullURL: 'https://www.stord.com/services-data-science-and-design',
      })
      .end((err, res) => {
        body = res.body;
        done();
      });
  });
  describe('GET /:slug', () => {
    it('Getting an invalid short URL should not work', (done) => {
      request(server)
        .get('/test')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
    it('Getting a valid short URL should redirect to original URL', (done) => {
      request(server)
        .get(`/${body.slug}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect('Location', `${body.fullURL}`);
          done();
        });
    });
  });
  /*
   * Test the /POST route
   */
  describe('POST /', () => {
    it('Shortening an empty String should be invalid', (done) => {
      let url = {
        fullURL: '',
      };
      chai
        .request(server)
        .post('/')
        .send(url)
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });
  });
  it('Shortening an invalid URL should be invalid', (done) => {
    let url = {
      fullURL: '//test.com',
    };
    chai
      .request(server)
      .post('/')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('Shortening a new URL should create a new short URL link', (done) => {
    let url = {
      fullURL: 'https://www.linkedin.com/company/stord/posts/?feedView=images',
    };
    chai
      .request(server)
      .post('/')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.shortURL.length).to.be.above(0);
        expect(res.body.slug.length).to.be.above(0);
        expect(res.body.fullURL).to.equal(url.fullURL);
        done();
      });
  });
  it('Shortening an existing URL should generate the same short URL link', (done) => {
    let url = {
      fullURL: 'https://www.stord.com/services-data-science-and-design',
    };
    chai
      .request(server)
      .post('/')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.fullURL).to.equal(body.fullURL);
        expect(res.body.shortURL).to.equal(body.shortURL);
        done();
      });
  });
  after(function (done) {
    console.log('Deleting test database');
    mongoose.connection.db.dropDatabase(done);
  });
});
