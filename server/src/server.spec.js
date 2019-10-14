import request from 'supertest';
import app from './server';

import * as montyHall from './montyHall';

describe('server', () => {
  beforeEach(() => {
    jest.spyOn(montyHall, 'simulate').mockReturnValue(false);
  });

  describe('GET /health', () => {
    it('should return 200', async () => {
      const res = await request(app)
        .get('/health')
        .send();

      expect(res.statusCode).toEqual(200);
    });
  });

  describe('GET /simulate', () => {
    it('should return 400 when number of games is missing from query string', async () => {
      const res = await request(app)
        .get('/simulate?changing=true')
        .send();

      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 when changing is missing from query string', async () => {
      const res = await request(app)
        .get('/simulate?games=100')
        .send();

      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 when changing is not a boolean in query string', async () => {
      const res = await request(app)
        .get('/simulate?games=100&changing=hej')
        .send();

      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 when games is not a number in query string', async () => {
      const res = await request(app)
        .get('/simulate?games=hej&changing=false')
        .send();

      expect(res.statusCode).toEqual(400);
    });

    it('should return 200 when query is correct', async () => {
      const res = await request(app)
        .get('/simulate?games=100&changing=false')
        .send();

      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual(
        expect.objectContaining({
          wins: expect.any(Number),
          losses: expect.any(Number),
          avg: expect.any(Number),
          games: 100
        })
      );
    });
  });
});
