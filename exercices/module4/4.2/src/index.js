import axios from 'axios'

const promise = axios.get('http://localhost:3001/persons')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)