import { useState, useEffect } from 'react'
import PersonsAPI from '../../services/person'
import AddPerson from '../AddPerson/AddPerson'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    PersonsAPI.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.error('Error fetching persons:', error)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <AddPerson persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App