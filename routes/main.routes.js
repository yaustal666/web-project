const {Router} = require('express')
const router = Router()


// шаблон для гет-запросов
function routerGet(route, page, params){

    router.get(route, (req, res) =>{
        res.render(page, params)
    })
}
// 

// основные страницы
routerGet('/', 'home', {title: 'Home'}) // ✅


routerGet('/catalog', 'catalog', {title: 'Catalog'})

routerGet('/hall', 'hall', {title: 'Hall'})

routerGet('/contact', 'contact', {title: 'Contacts'}) // ✅

routerGet('/about', 'about', {title: 'About us'}) // ✅

routerGet('/features', 'temp', {title: 'Features', temp: "Временная заглушка"})

routerGet('/aboutme', 'temp', {title: 'About me', temp: "Временная заглушка"})

routerGet('/myposts', 'temp', {title: 'Myposts', temp: "Временная заглушка"})

routerGet('/issues', 'temp', {title: 'Issues', temp: "Временная заглушка"})

routerGet('/rules', 'temp', {title: 'Rules', temp: "Временная заглушка"})

routerGet('/accountsettings', 'temp', {title: 'Settings', temp: "Временная заглушка"})
// 


module.exports = router