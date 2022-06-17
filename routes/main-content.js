const {Router} = require('express')

const router = Router()

const products = [1, 1, 1]

function rget(route, page, params){

    router.get(route, (req, res) =>{
        res.render(page, params)
    })
}


rget('/', 'home', {title: 'Home'})

router.get('/help', (req, res)=>{
    res.render('help', {title: 'Help'})
})

router.get('/catalog', (req, res)=>{
    res.render('catalog', {title: 'Catalog'})
})

router.get('/hall', (req, res)=>{
    res.render('hall', {title: 'Hall'})
})

router.get('/about', (req, res)=>{
    res.render('about', {title: 'About us'})
})

router.get('/contact', (req, res)=>{
    res.render('contact', {title: 'Our contacts'})
})

module.exports = router