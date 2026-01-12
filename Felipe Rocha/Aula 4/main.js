const person = {
   firstName: 'Guilherme',
   lastName: 'Fernando',
   age: 19,
   hobbies: ['Ouvir música', 'Estudar programação', 'Jogar vôlei'],
   dog: {
     name: 'Simba',
     age: 4
   }
}

const hobby = person.hobbies[2]

const { firstName, lastName, age, hobbies, dog: { name: dogName } } = person

person.dog.name = 'Simba'

console.log(person.dog.age)

const todos = [
  { id: 1, description: 'Estudar', isCompleted: false },
  { id: 2, description: 'Ler', isCompleted: true },
  { id: 3, description: 'Treinar', isCompleted: true }
]

const todo = todos[2]
const isCompleted = todo.isCompleted

console.log(todo)
console.log(isCompleted)
