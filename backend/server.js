import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js'
// routes
import userRoutes from './routes/userRoutes.js'
// error middlewares
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

connectDB();

const port = process.env.PORT || 5000;

const app = express();

// parse data to json
app.use(express.json());
// parse form data
app.use(express.urlencoded({ extended: true }))

// route usage
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

// error middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))