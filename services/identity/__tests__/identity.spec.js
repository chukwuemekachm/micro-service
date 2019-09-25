import chai from 'chai';
import chaiHttp from 'chai-http';

import identityService from '../src';

chai.use(chaiHttp);
const { expect } = chai;

describe('Identity Service', () => {
  it('should return (404) error when route does not exist', async () => {
    const { body: { message }, status } = await chai
      .request(identityService)
      .post('/api/v1/auth/register');
    expect(message).eql('Route-unavailable');
    expect(status).eql(404);
  });

  it('should return (401) error when username or password is not provided', async () => {
    const { body: { message }, status } = await chai
      .request(identityService)
      .post('/api/v1/auth/login');
    expect(message).eql('Invalid credentials');
    expect(status).eql(401);
  });

  it('should return (200) success when username and password is provided', async () => {
    const { body: { data: { token } }, status } = await chai
      .request(identityService)
      .post('/api/v1/auth/login')
      .send({ username: 'username', password: 'Password' });
    expect(typeof token).eql('string');
    expect(status).eql(200);
  });
});
