const {Router} = require('express')
const router = Router()

const auth = require('./auth')


// шаблон для гет-запросов
function routerGet(route, page, params){

    router.get(route, (req, res) =>{
        res.render(page, params)
    })
}
// 

// гет-запросы
routerGet('/', 'home', {title: 'Home'})

routerGet('/help', 'help', {title: 'Help'})

routerGet('/catalog', 'catalog', {title: 'Catalog'})

routerGet('/hall', 'hall', {title: 'Hall'})

routerGet('/about', 'about', {title: 'About'})

routerGet('/contact', 'contact', {title: 'Contact'})

routerGet('/profile', 'profile', {title: 'Profile'})
// 

// пост-запросы
router.post('/registrate', auth.registration)
router.post('/login', auth.login)
// 

module.exports = router