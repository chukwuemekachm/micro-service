import jwt from 'jsonwebtoken';

const {
  JWT_KEY = 'JWT_KEY',
} = process.env;

export function login({ body }, response, next) {
  try {
    const { username, password } = body;
    let validationStatus = true;

    if (!username || typeof username !== 'string' || username.length < 2) validationStatus = false;
    if (!password || typeof password !== 'string' || password.length < 6) validationStatus = false;

    if (!validationStatus) {
      return response.status(401).json({
        status: 'error',
        message: 'Invalid credentials',
      });
    }

    return response.status(200).json({
      status: 'success',
      data: {
        token: jwt.sign({ username }, JWT_KEY, { expiresIn: '72hr' }),
      },
    });
  } catch (error) {
    return next(error);
  }
}
