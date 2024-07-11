const request = require('supertest');
const assert = require('assert');
const app = require('../app'); //where express app is stored

describe('API Tests', () => {
  let authToken; // To store the JWT token for authenticated requests


  // Test case for registering a new user  
  it('should register a new user', (done) => {
    request(app)
      .post('/api/v1/users')
      .send({ name: 'user', email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        
        console.log(res.body); // Log the response body to debug

        authToken = res.body.token; // Save the token to authToken
        assert.ok(authToken); // Ensure token is returned

        // Ensure response contains message and the correct message value
        assert.ok(res.body.message);
        assert.strictEqual(res.body.message, 'User registered with success');

        done();
        

      });
  });


// Now, simulate registering the same user again (invalid case)   
  it('should register a duplicated new user', (done) => {
    request(app)
    .post('/api/v1/users')
    .send({ name: 'user', email: 'user@gmail.com', password: 'user123' })
    .expect(401) // Expecting error code
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      console.log(res.body); // Log the response body to debug
      assert.ok(res.body.message); 
      assert.strictEqual(res.body.message, 'User already registered');
      done();

    });
  });



  // Test case for authenticating a user with valid credentials that was previously registered 
  it('should authenticate user and return access token', (done) => {
    request(app)
      .post('/api/v1/auth')
      .send({ email: 'user@gmail.com', password: 'user123' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        assert.ok(res.body.token); // Ensure token is returned
        authToken = res.body.token; // Save token for future authenticated requests

        done();
      });
  });

  


 // Test case for authenticating a user with invalid email and password
it('should not authenticate user with invalid credentials and return an error', (done) => {
  request(app)
    .post('/api/v1/auth')
    .send({ email: 'invaliduser@gmail.com', password: 'wrongpassword' })
    .expect(401) // Expecting a 401 Unauthorized status code
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      assert.ok(res.body.message); // Ensure error message is returned
      assert.strictEqual(res.body.message, 'Incorrect email or password');
      done();
    });
});








  // Test case for getting user details with valid token 
  it('should get user details with valid token', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Authorization', authToken)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);

        assert.strictEqual(res.body.name, 'user');
        assert.strictEqual(res.body.email, 'user@gmail.com');
        assert.strictEqual(res.body.password, 'user123');
        done();
      });
  });




  // Test case for getting user details with invalid token
  it('should not get user details with invalid token', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Authorization', 'InvalidToken')
      .expect(403) 
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);

        assert.ok(res.body.message); // Ensure error message is returned
        assert.strictEqual(res.body.message, 'Unauthorized');
        done();
      });
  });





  //patch

  // Test case for updating user details with valid token
  it('should update user details with valid token', (done) => {
    request(app)
      .patch('/api/v1/users')
      .set('Authorization', authToken)
      .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'User updated with success!');
        done();
      });
  });


  // Test case for updating user details with invalid token
it('should not update user details with invalid token', (done) => {
  request(app)
    .patch('/api/v1/users')
    .set('Authorization', 'InvalidToken')
    .send({ name: 'newName', email: 'new_email@gmail.com', password: 'newpassword123' })
    .expect(403)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      assert.ok(res.body.message); // Ensure error message is returned
      assert.strictEqual(res.body.message, 'jwt malformed');
      done();
    });
});



  // delete 

  // Test case for deleting user with valid token // bug
  it('should delete user with valid token', (done) => {
    request(app)
      .delete('/api/v1/users')
      .set('Authorization', authToken)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'User deleted with success');
        done();
      });
  });


  // delete all 

  //Test case for deleting all users (admin operation)
  it('should delete all users with admin key', (done) => {
    request(app)
      .delete('/api/v1/all-users')
      .send({ key_admin: 'keyadmin123' })
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'Users deleted with success');
        done();
      });
  });


  

  // Test case for unauthorized access to delete all users
  it('should return 403 for unauthorized access to /all-users', (done) => {
    request(app)
      .delete('/api/v1/all-users')
      .send({ key_admin: 'dg' })
      .expect(403)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'Unauthorized access');
        done();
      });
  });

});

