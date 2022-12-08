const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017/crud'

const app = express();

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function () {
    console.log('connected')
});

app.use(express.json())

const crudRouter = require('./routes/cruds')
app.use('/cruds', crudRouter)

app.listen(9000, () => {
    console.log('server started');
})