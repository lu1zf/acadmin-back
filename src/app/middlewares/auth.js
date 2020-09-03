import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'token not provided' });
  }

  const [, token] = authHeader.split(' ');

  const decoded = await promisify(jwt.verify)(token, authConfig.secret);

  if (decoded) {
    return next();
  }
  return res.status(401).json({ error: 'Token invalid' });

  // try {

  // } catch (err) {
  //   return res.status(401).json({ error: 'Token invalid' });
  // }
};
