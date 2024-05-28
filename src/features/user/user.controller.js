import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';

export default class UserController {
  register(req, res) {
    const {
      name,
      email,
      password
    } = req.body;
    const user = UserModel.register(
      name,
      email,
      password
    );
    res.status(201).send(user);
  }

  signIn(req, res) {
    const result = UserModel.signIn(
      req.body.email,
      req.body.password
    );
    if (!result) {
      return res
        .status(400)
        .send('Incorrect Credentials');
    } else {
      // 1. Create token.
      const token = jwt.sign(
        {
          userId: result.id,
          email: result.email,
        },
        'e7TQj6kzHJNcIpX6truwBDusC0Ny7Y4K',
        {
          expiresIn: '1h',
        }
      );

      // 2. Send token.
      return res.status(200).send(token);
    }
  }
}
