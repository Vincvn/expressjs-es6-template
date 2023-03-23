import express from 'express';
import cors from 'cors';
import homeRoutes from './routes/home.route.js';
const port = process.env.PORT || 3000; // set the port
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', homeRoutes);

app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('SERVER ERROR');
});
app.listen(port);
console.log('Server is listening on port ' + port);
export default app;