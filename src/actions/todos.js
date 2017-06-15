let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  key: nextTodoId++,
  text: text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  key: id
})