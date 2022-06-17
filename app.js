const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const main_content = require('./routes/main-content')

const PORT = 3000
const app = express()


// подключение шаблонизатора
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// подключение переопределения стилей
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(main_content)





// starting 
app.listen(PORT, (req, res)=>{console.log(`Running on port ${PORT}`)})