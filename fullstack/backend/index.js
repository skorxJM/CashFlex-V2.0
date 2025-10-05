import express from 'express';
import db from './config/database.js';
import transactionRoutes from './routes/transactions.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

try {
  await db.authenticate();
  await db.sync(); // en dev, db.sync({alter:true}) si quieres
  console.log('Database connected...');
} catch (error) {
  console.error('DB connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/transactions', transactionRoutes);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
