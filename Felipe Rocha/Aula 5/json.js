// Array de objetos representando uma lista de tarefas (todos)
const todos = [
  { id: 1, description: 'Estudar', isCompleted: false },
  { id: 2, description: 'Ler', isCompleted: true },
  { id: 3, description: 'Treinar', isCompleted: true }
];

// JSON.stringify()
// Converte um objeto ou array JavaScript em uma string no formato JSON
// Muito usado para armazenar dados (ex: localStorage) ou enviar para APIs
const todosJSON = JSON.stringify(todos);

// JSON.parse()
// Converte uma string JSON de volta para um objeto ou array JavaScript
// Usado quando recebemos dados em formato JSON
const todosList = JSON.parse(todosJSON);

// Exibe no console o array convertido novamente para objeto JavaScript
console.log(todosList);
