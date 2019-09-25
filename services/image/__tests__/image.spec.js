import chai from 'chai';
import chaiHttp from 'chai-http';

import imageService from '../src';

chai.use(chaiHttp);
const { expect } = chai;
const invalidImageURL = 'https://images.unsplash.com/photo-1569397839775-c0329c943611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';
const validImageURL = 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg';

describe('Image Service', () => {
  it('should return (404) error when route does not exist', async () => {
    const { body: { message }, status } = await chai
      .request(imageService)
      .post('/api/v1/image/register');
    expect(message).eql('Route-unavailable');
    expect(status).eql(404);
  });

  it('should return (400) error when url is not provided', async () => {
    const { body: { message }, status } = await chai
      .request(imageService)
      .get('/api/v1/image/thumbnail');
    expect(message).eql('URL supplied contains an unsupported image format.');
    expect(status).eql(400);
  });

  it('should return (400) error when url is provided but image format is not supported', async () => {
    const { body: { message }, status } = await chai
      .request(imageService)
      .get('/api/v1/image/thumbnail')
      .send({ url: invalidImageURL });
    expect(message).eql('URL supplied contains an unsupported image format.');
    expect(status).eql(400);
  });

  it('should return (200) success when url is provided and image format is supported and downloadable', async () => {
    const { status } = await chai
      .request(imageService)
      .get('/api/v1/image/thumbnail')
      .send({ url: validImageURL });
    expect(status).eql(200);
  });
});
