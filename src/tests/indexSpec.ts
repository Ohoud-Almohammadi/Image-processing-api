import supertest from 'supertest';
import app from '../index';

// Run supertest on app endpoint
const request = supertest(app);

describe('Test home page endpoint:', (): void => {
  it('Should return 200 code status in home page endpoint ', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
