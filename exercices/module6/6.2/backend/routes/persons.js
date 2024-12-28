const router = require('express').Router();
const Person = require('../mongo');

router.get("/", (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Person.findById(id).then(person => {
    if (person) {
      res.json(person);
    } else {
      res.status(404).end();
    }
  });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Person.findByIdAndRemove(id).then(() => {
    res.status(204).end();
  });
});

router.post("/", (req, res) => {
  const personPayload = req.body;
  const person = new Person(personPayload);

  person.save().then(savedPerson => {
    res.json(savedPerson);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const personPayload = req.body;

  Person.findByIdAndUpdate(id, personPayload, { new: true }).then(updatedPerson => {
    res.json(updatedPerson);
  });
});

module.exports = router;