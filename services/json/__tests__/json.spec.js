import chai from 'chai';
import chaiHttp from 'chai-http';

import jsonService from '../src';

chai.use(chaiHttp);
const { expect } = chai;

describe('Json Service', () => {
  it('should return (404) error when route does not exist', async () => {
    const { body: { message }, status } = await chai
      .request(jsonService)
      .post('/api/v1/json/patch');
    expect(message).eql('Route-unavailable');
    expect(status).eql(404);
  });

  it('should return (400) error when an invalid document or operation is provided', async () => {
    const { body: { errors }, status } = await chai
      .request(jsonService)
      .patch('/api/v1/json/doc');
    expect(errors).to.be.an('object');
    expect(errors).property('name').eql('OPERATION_NOT_AN_OBJECT');
    expect(status).eql(400);
  });

  it('should return (200) success when a valid document and operation is provided', async () => {
    const { body: { data: { document } }, status } = await chai
      .request(jsonService)
      .patch('/api/v1/json/doc')
      .send({
        document: { firstName: 'Albert', contactDetails: { phoneNumbers: [] } },
        operation: { op: 'replace', path: '/firstName', value: 'Joachim' },
      });
    expect(document).eql({ firstName: 'Joachim', contactDetails: { phoneNumbers: [] } });
    expect(status).eql(200);
  });
});
