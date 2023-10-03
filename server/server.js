import express from 'express'
import dotenv from 'dotenv';
import userRouters from './routes/userRoutes'
import ViteExpress from "vite-express"
dotenv.config();
const port = import.meta.env.VITE_PORT || 5000

const app = express();

app.use('api/users', userRouters)

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log('Server started on port ${port'))