import Joi from '@hapi/joi';
import express from 'express';
import * as logger from './logger';

import { simulate } from './montyHall';

const app = express();

const simulationSchema = Joi.object({
  games: Joi.number().required(),
  changing: Joi.boolean().required(),
  doors: Joi.number()
}).unknown();

app.get('/health', (req, res) => res.sendStatus(200));

app.get('/simulate', (req, res) => {
  const { error, value } = simulationSchema.validate(req.query);

  if (error) {
    logger.warn(error);
    return res.sendStatus(400);
  }

  const { changing, games, doors } = value;

  const wins = Array.from({ length: games })
    .map(() => simulate({ changing, doors }))
    .reduce((acc, curr) => acc + (curr ? 1 : 0), 0);

  return res.send({
    wins,
    losses: games - wins,
    avg: wins / (games || 1),
    games
  });
});

export default app;
