const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local')
const cors = require('cors')

const authenticateUserRoute = require('./routes/apiRoutes')
const User = require('./models/user')

const app = express()

app.listen(2000, () => {
    console.log('server runing on port 2000 ...')
})

mongoose.connect('mongodb://localhost:27017/car-rent', { useNewUrlParser: true, })
    .then(() => {
        console.log('database connected')
    }).catch(err => {
        console.log('mongoose error connection', err)
    })

const sessionOptions = {
    secret: 'thisisnotagoodsecrettohave',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}


app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.use(session(sessionOptions));
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next()
})

// routes

app.use('/', authenticateUserRoute)