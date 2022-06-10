import express from 'express'
import path from 'path'
// import {requestTime, logger} from './middlewares/middleware.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

// подключение шаблонизатора
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'templates'))

// подключение переопределения стилей
app.use(express.static(path.resolve(__dirname, 'static')));
// app.use(requestTime)
// app.use(logger)



app.get('/', (req, res)=>{
    res.render('index', {title: 'Home', active: "home"})
})

app.get('/help', (req, res)=>{
    res.render('index', {title: 'Help', active: 'help'})
})

app.get('/catalog', (req, res)=>{
    res.render('index', {title: 'Catalog', active: 'catalog'})
})

app.get('/hall', (req, res)=>{
    res.render('index', {title: 'Hall', active: 'hall'})
})

app.get('/about', (req, res)=>{
    res.render('index', {title: 'About us', active: 'about'})
})

app.get('/contact', (req, res)=>{
    res.render('index', {title: 'Our contacts'})
})

// starting 
app.listen(PORT, (req, res)=>{console.log(`Running on port ${PORT}`)})