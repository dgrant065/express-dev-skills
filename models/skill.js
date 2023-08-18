const skills = [
    {id: 20, skill: 'skateboarding', difficulty: 'medium'},
    {id: 30, skill: 'coding', difficulty: 'hard'},
    {id: 40, skill: 'language', difficulty: 'easy'}
];

module.exports = {
    getAll, getOne, create, deleteOne, update

};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
    

    
}

function deleteOne(id) {
    id = parseInt(id);
    const idIdx = skills.findIndex(skill => skill.id === id)
    skills.splice(idIdx, 1);

}


function create(skill) {
    skill.id = Date.now() % 100000;
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