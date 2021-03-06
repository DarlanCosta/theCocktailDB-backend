import User from '../models/User';

class UserController {
  async store(req, res) {
    console.log(req.body);

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email } = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
    });
    return res.json({
      id,
      name,
      email,
    });
  }

  async update(req, res) {
    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);
    const { id, name } = await User.findByPk(req.userId, {});

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
