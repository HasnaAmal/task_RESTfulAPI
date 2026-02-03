import express from 'express';
const app = express();
import taskRoutes from './Routes/taskRoutes.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/user', taskRoutes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})