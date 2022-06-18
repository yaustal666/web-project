const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

const routes = require('./routes/routes')

// константы
const PORT = 3000
const mdb = 'mongodb+srv://yaustal666:qwerty123@petshare.7xikqsu.mongodb.net/?retryWrites=true&w=majority'
// 

const app = express()

// подключение шаблонизатора
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
// 

// подключение переопределения стилей, скриптов, картинок
app.use(express.static(path.resolve(__dirname, 'static')));
// 

app.use(routes)
app.use(express.json())


// starting 
const start = async () => {

    try {
      await mongoose.connect(mdb, { ssl: true })
      console.log("Connected")
      app.listen(PORT, (req, res)=>{console.log(`Running on port ${PORT}`)})

    } catch (error) {

      console.log(error)
    }
}

start()