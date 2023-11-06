const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', async (req,res) => {

    const projectData = await Project.findAll();
    const project = (projectData).map((project)=> project.dataValues);

    res.render('homepage', {project});
});

module.exports = router;