const Skill = require('../models/skill')

module.exports = {
    index,show, new: newSkill, create, edit 
}

function edit(req, res) {
    res.render('skills/edit', {
        title: 'Edit a Skill',
        skill: Skill.getOne(req.params.id)
    })

}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
    
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill'});

}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
        
    });

}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
        
    });

}