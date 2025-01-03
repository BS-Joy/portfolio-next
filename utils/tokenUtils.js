import jwt from "jsonwebtoken";

export const generateToken = (userData) => {
  const token = jwt.sign(userData, process.env.NEXT_JWT_SECRET_KEY, {
    expiresIn: 60 * 5,
  });

  return token;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.NEXT_JWT_SECRET_KEY);
  } catch (err) {
    console.error("Invalid token:", err);
    return null;
  }
};
