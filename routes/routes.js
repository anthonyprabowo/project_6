const express = require('express');
const router = express.Router();
const data = require('../data.json');
// routes
router.get('/', (req, res) => {
    res.render('index', {project_datas: data});
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/project/:id', (req,res) => {
    const id = req.params.id;
    res.render('project', {
        project_name: data[id].project_name,
        description: data[id].description,
        technologies: data[id].technologies,
    });
});

module.exports = router;