import * as Yup from 'yup';
import Drink from '../models/Drink';

class DrinkController {
  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.integer().required(),
      email: Yup.string().required(),
      instructions: Yup.string(),
      drink_thumb: Yup.string(),
      favorite: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const drinkExists = await Drink.findOne({ where: { id: req.body.id } });

    if (drinkExists) {
      return res.status(400).json({ error: 'Drink already exists.' });
    }

    const { id, drink, favorite } = await Drink.create(req.body);
    return res.json({
      id,
      drink,
      favorite,
    });
  }
}

export default new DrinkController();
