const { Pet } = require('../models/pet.model');


module.exports.createPet = (request, response) => {
  Pet.create(request.body)

  .then(pet => response.json(pet))
  .catch(err => response.status(400).json(err));
}

module.exports.getAllPets = (request, response) => {
  Pet.find({})
        .then(pets => response.json(pets))
        .catch(err => response.json(err))
}

module.exports.getPet = (request, response) => {
  Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

module.exports.updatePet = (req,res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new:true, runValidators: true })
    .then(updatePet => res.json(updatePet))
    .catch(err => res.status(500).json(err));
}


module.exports.deletePet = (req,res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(deletePet => res.json(deletePet))
    .catch(err => res.json(err));
}