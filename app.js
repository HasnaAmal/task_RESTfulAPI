import express from 'express';
const app = express();
import taskRoutes from './Routes/taskRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.use('/user', taskRoutes);
app.use('/user', categoryRoutes);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
})