const skills = [
    {id: 20, skill: 'skateboarding', difficulty: 'medium'},
    {id: 30, skill: 'coding', difficulty: 'hard'},
    {id: 40, skill: 'language', difficulty: 'easy'}
];

module.exports = {
    getAll, getOne, create,

};

function create(skill) {
    skill.id = Date.now() % 100000;
    skill.difficulty = 'easy';
    skills.push(skill);

}

function getAll() {
    return skills;
}

function getOne(id) {
    console.log(id)
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}