const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const task = await Task.find();
    console.log(task);
    res.json(task);
});

router.get('/:id', async (req, res) => {

    const task = await Task.findById(req.params.id,(err, task) => { 
        
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'we could not get task',
                errors: err
            });
        }

        if (!task) {
            return res.status(400).json({
                ok: false,
                mensaje: 'id task  ' + req.params.id + ' does not exist',
                errors: { message: 'there is no such id' }
            });
        }

        if (task) {
            return res.json(task);
        }

    });

    //return res.json(task);

});

router.post('/', async (req,res ) => {
    const {title, description} = req.body;
    const task = new Task({title, description});
    await task.save();
    res.json({status: 'task saved'});
});


router.put('/:id', async (req,res ) => {
    const {title, description} = req.body;
    const newTask = ({title, description});
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req.params.id, newTask);
    res.json({status: 'task updated'});
});


router.delete('/:id', async (req,res ) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'task deleted'});
});






module.exports = router;