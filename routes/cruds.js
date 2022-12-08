const express = require('express');
const router = express.Router()
const Crud =require('../models/crud');
router.get('/', async(req,res) => {
    try{
           const cruds = await Crud.find()
           res.json(cruds)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const crud = await Crud.findById(req.params.id)
           res.json(crud)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const crud = new Crud({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await crud.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const crud = await Crud.findById(req.params.id) 
        crud.sub = req.body.sub
        const a1 = await crud.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router;