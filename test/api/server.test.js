process.env.NODE_ENV = 'test';
//Testing Libraries
const expect = require('chai').expect;
const request = require('supertest');
const mongoose = require('mongoose');
//Imports
const server = require('../../server.js');
const connectDB = require('../../db/test.js');

describe('URL', () => {
  let body;
  /*
   * Connect to MongoDB
   */
  beforeEach(async () => {
    await connectDB();
  });
  /*
   * Create sample data in test database
   */
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
  /*
   * Test the GET /:slug route
   */
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
      request(server)
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
    request(server)
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
    request(server)
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
    request(server)
      .post('/')
      .send(url)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.fullURL).to.equal(body.fullURL);
        expect(res.body.shortURL).to.equal(body.shortURL);
        done();
      });
  });
  /*
   * Drop testing database
   */
  after(function (done) {
    console.log('Deleting test database');
    mongoose.connection.db.dropDatabase(done);
  });
});
