import supertest from 'supertest';
import app from '../index';
// Run supertest on app endpoint
const request = supertest(app);

describe('Test images endpoints scenarios:', (): void => {
  it('Should return 200 code status in complete and correct request  ', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=santamonica&width=2500&height=2500');
    expect(response.status).toBe(200);
  });

  it('Should return 404 code status in request with invalid image name ', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=xxximage&width=2500&height=2500');
    expect(response.status).toBe(404);
  });

  it('Should return 404 code status in incomplete request (height missing)  ', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=fjord&width=200');
    expect(response.status).toBe(404);
  });

  it('Should return 404 code status in incorrect requist (with negative values)  ', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=icelandwaterfall&width=-2500&height=-2500'
    );
    expect(response.status).toBe(404);
  });
});
