import Transaction from '../models/transactionModel.js';

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ order: [['createdAt','DESC']] });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({ where: { id: req.params.id }});
    if (!transaction) return res.status(404).json({ message: 'Transaction not found' });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTransaction = async (req, res) => {
  try {
    const { userId, type, amount, category, description } = req.body;
    const tx = await Transaction.create({ userId, type, amount, category, description });
    res.status(201).json(tx);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  try {
    await Transaction.update(req.body, { where: { id: req.params.id }});
    res.json({ message: 'Transaction Updated' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  try {
    await Transaction.destroy({ where: { id: req.params.id }});
    res.json({ message: 'Transaction Deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
