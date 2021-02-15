const express = require('express');
const router = express.Router();
const data = require('../data.json');
// routes
router.get('/', (req, res) => {
    res.render('index', {project_datas: data["projects"]});
});

router.get('/about', (req, res) => {
    res.render('about')
});

router.get('/project/:id', (req,res) => {
    const id = req.params.id;
    res.render('project', {
        project_name: data["projects"][id].project_name,
        description: data["projects"][id].description,
        technologies: data["projects"][id].technologies,
        project_link: data["projects"][id].live_link,
        project_repo: data["projects"][id].github_link,
        images: data["projects"][id].image_urls
    });
});

module.exports = router;