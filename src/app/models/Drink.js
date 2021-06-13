import Sequelize, { Model } from 'sequelize';

class Drink extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.INTEGER,
        drink: Sequelize.STRING,
        instructions: Sequelize.STRING,
        drink_thumb: Sequelize.STRING,
        favorite: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}
export default Drink;
