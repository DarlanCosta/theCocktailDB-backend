import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

console.log(databaseConfig);
const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // this.connection = new Sequelize(
    //   `postgres://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}:5432/${databaseConfig.database}`
    // );

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
