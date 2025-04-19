import jwt from 'jsonwebtoken';

const JWT_SECRET = 'yehmerasecrethai';

export const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Contains voter id
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
