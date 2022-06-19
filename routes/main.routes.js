const {Router} = require('express')
const router = Router()


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

routerGet('/signup', 'signup', {layout: 'service', title: 'Sign up'})

routerGet('/login', 'login', {layout: 'service', title: 'Log in'})
// 




module.exports = router