import express from 'express';

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index', {
        Title: 'handlebars',
    })
})

router.get('/products', (req, res) =>{
    res.render('products', {
        Title: 'Products',
        Mensaje: 'esto es esparta'
    })
})

export default router;