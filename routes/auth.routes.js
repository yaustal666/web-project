const {Router} = require('express')
const router = Router()
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// шаблон для гет-запросов
function routerGet(route, page, params){

    router.get(route, (req, res) =>{
        res.render(page, params)
    })
}
// 

// гет-запросы
routerGet('/signup', 'signup', {layout: 'service', title: 'Sign up'})

routerGet('/login', 'login', {layout: 'service', title: 'Log in'})

routerGet('/success', 'success', {layout: 'service', title: 'Success'})
// 

router.post('/registrate', 
    [
        check('username', 'Слишком короткое имя пользователя').isLength({min: 4}),
        check('password', 'Слишком короткий пароль').isLength({min: 6})
    ],      
    async (req, res) => {

        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) {
                return res.redirect(400, '/success')
            }

            const {username, password} = req.body

            const candidate = await User.findOne({username})

            if(candidate){
                return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const user = new User({ username, password: hashedPassword})
            await user.save()

            res.status(201).json({message: 'Пользователь создан'})

        } catch (e) {
            res.status(500).json({message: "Извините, но что-то пошло не так, попробуйте ещё раз"})
        }
    }
)

router.post('/login', 
    [
        check('username', 'Введите имя пользователя').exists(),
        check('password', 'Введите пароль').exists()
    ],      
    async (req, res) => {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Некорректные данные"
            })
        }

        try {
            
            const {username, password} = req.body

            const user = await User.findOne({username})

            if(!user){
                res.status(400).json({message: 'Пользователь не найден'})
            }

            const equal = bcrypt.compare(password, user.password)

            if(!equal){
                res.status(400).json({message: 'Неверный пароль'})
            } 
            
            // const token = jwt.sign({username}, 'secret word', {expiresIn: "1h"} )
            // return res.json({token})

        } catch (e) {
            res.status(500).json({message: "Извините, но что-то пошло не так, попробуйте ещё раз"})
        }
    }
)

router.get('/profile', (req, res) => {


    res.render('profile', {title: 'Profile'})
})

module.exports = router