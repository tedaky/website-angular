import * as express from 'express';
export const router = express.Router();

/* GET portfolio page. */
router.get('/', (req: any, res: any, next: any): void => {
  res.send('Api Works!');
});
