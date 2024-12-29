const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const password = process.argv[2];
const command = process.argv[3];
const url = `mongodb+srv://ana466410:${password}@ana07.4da2x.mongodb.net/phonebook?retryWrites=true&w=majority&appName=Ana07`;


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  Person.find({}).then(result => {
    console.log('phonebook:');
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
} else if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then(() => {
    console.log(`added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  });
} else {
    console.log('Please provide the correct arguments:');
    console.log('To list all entries: node mongo.js <password> list');
    console.log('To add a person: node mongo.js <password> add-person <name> <number>');
    console.log('To add an address: node mongo.js <password> add-address <street> <city>');
    process.exit(1);
}

