﻿import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.DOUBLE(6, 3),
        height: Sequelize.DOUBLE(1, 2),
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;