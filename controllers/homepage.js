const router = require('express').Router();
const Project = require('../models/Project');

const { areAuth } = require('../utils/auth');

router.get('/', async (req,res) => {
try{
    
    const projectData = await Project.findAll();

    const project = (projectData).map((project)=> project.dataValues);

    res.render('homepage', {
        project,
        loggedIn: req.session.loggedIn,
    });
}catch(err){
res.status(500).json(err);
}
});


router.get('/login', areAuth, (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;