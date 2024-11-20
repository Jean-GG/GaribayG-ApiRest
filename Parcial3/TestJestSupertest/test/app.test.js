const request = require('supertest');
const app = require('../app');

describe('GET /inicio', () => {
  it('Revisar que el servidor me de un 200', async () => {
    const response = await request(app).get('/inicio');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hola, Mundo!');
  });
});
