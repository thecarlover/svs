// middlewares/authAdmin.js
import jwt from 'jsonwebtoken';

export const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded.admin;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' });
  }
};
