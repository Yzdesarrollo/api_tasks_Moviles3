import express from 'express';
import router from './Routes/ProjectRoutes';

let app = express();
app.use(express.urlencoded({extended:false}));
app.use('/api',router);
module.exports = app;
