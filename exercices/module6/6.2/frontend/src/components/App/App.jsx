import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    };

    axios.post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      });
  };

  const deletePerson = (id) => {
    console.log(`Deleting person with id: ${id}`);
    axios.delete(`http://localhost:3001/persons/${id}`)
      .then(response => {
        console.log('Delete response:', response);
        setPersons(persons.filter(person => person._id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the person!', error);
      });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {persons.map(person => (
          <li key={person._id}>
            {person.name} {person.number}
            <button onClick={() => {
              console.log(`Button clicked for person with id: ${person._id}`);
              deletePerson(person._id);
            }}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;