const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mainRoutes = require('./routes/main.routes')
const auth = require('./routes/auth.routes')

const app = express()

// константы
const PORT = 3000
const mdb = 'mongodb+srv://yaustal666:qwerty123@petshare.7xikqsu.mongodb.net/?retryWrites=true&w=majority'
// 

//  чтобы парсить тела запросов
app.use(bodyParser.urlencoded({extended: true}))
// 

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

// routes
app.use(mainRoutes)
app.use(auth)
// 

// starting 
async function start() {

    try {
      await mongoose.connect(mdb, { ssl: true })
      app.listen(PORT, (req, res)=>{console.log(`Running on port ${PORT}`)})

    } catch (error) {

      console.log('Connection error', error.message)
      process.exit(1)
    }
}

start()