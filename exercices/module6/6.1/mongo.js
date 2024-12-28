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
}, { collection: 'people' });

const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
}, { collection: 'address' });

const Person = mongoose.model('Person', personSchema);
const Address = mongoose.model('Address', addressSchema);

if (command === 'list') {
    Person.find({}).then(result => {
        console.log('phonebook:');
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`);
        });
        mongoose.connection.close();
    });
} else if (command === 'add-person') {
    const person = new Person({
        name: process.argv[4],
        number: process.argv[5],
    });

    person.save().then(() => {
        console.log(`added ${person.name} number ${person.number} to phonebook`);
        mongoose.connection.close();
    });
} else if (command === 'add-address') {
    const address = new Address({
        street: process.argv[4],
        city: process.argv[5],
    });

    address.save().then(() => {
        console.log(`added address ${address.street}, ${address.city} to address book`);
        mongoose.connection.close();
    });
} else {
    console.log('Please provide the correct arguments:');
    console.log('To list all entries: node mongo.js <password> list');
    console.log('To add a person: node mongo.js <password> add-person <name> <number>');
    console.log('To add an address: node mongo.js <password> add-address <street> <city>');
    process.exit(1);
}

