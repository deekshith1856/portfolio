import express from 'express';
import 'dotenv/config.js'
const app = express();

const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log('App listening on port', port);
})