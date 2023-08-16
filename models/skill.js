const skills = [
    {id: 20, skill: , difficulty:},
    {id: 30, skill: , difficulty:},
    {id: 40, skill: , difficulty:}
];

module.exports ={
    getAll, getOne

};

function getAll() {
    return skills;
}

function getOne(id) {
    console.log(id)
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}