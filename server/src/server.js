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

  const results = Array.from({ length: games })
    .map(() => simulate({ changing, doors }))
    .reduce(
      (acc, curr) => ({
        wins: curr ? acc.wins + 1 : acc.wins,
        losses: !curr ? acc.losses + 1 : acc.losses
      }),
      { wins: 0, losses: 0 }
    );

  return res.send({
    ...results,
    avg: results.wins / games,
    games
  });
});

export default app;
