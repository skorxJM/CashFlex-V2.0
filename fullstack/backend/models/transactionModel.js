import db from '../config/database.js';
import { DataTypes } from 'sequelize';

const Transaction = db.define('transactions', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  type: {                 // 'income' o 'expense'
    type: DataTypes.ENUM('income','expense'),
    allowNull: false
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(500),
    allowNull: true
  }
}, {
  freezeTableName: true,
  timestamps: true
});

export default Transaction;
