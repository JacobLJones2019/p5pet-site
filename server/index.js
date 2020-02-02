const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = 2790;



//Connect to DB
mongoose.connect('mongodb://localhost:27017/game', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log(`Holding your data happily since ${port}!`))
    .catch(err => console.error(err));

// Middleware
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// Controllers
const avatarController = require('../server/controllers/AvatarController');

// Routes
app.get('/api/user/read', avatarController.read);
app.post('/api/user/create', avatarController.create);
app.post('/api/user/update', avatarController.update);

//Start express app.
app.listen(port, () => console.log(`Happily serving your files since ${port}!`));
