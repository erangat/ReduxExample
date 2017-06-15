const initialState = [{ key: 0, text: 'See todo example without redux', status: 'active' }, { key: 1, text: 'Change example to use redux', status: 'active' }];

const toggleTodo = (todo, key) => {
    console.debug(key);
    console.debug('todokey ' + todo.key);
    if (todo.key != key) {
        return todo;
    }

    todo.status = todo.status == 'active' ? 'completed' : 'active';
    
    return todo;
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      var todo = {
          key: action.key,
          text: action.text,
          status: 'active'
      }
      return [
        ...state, todo
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => toggleTodo(todo, action.key));
    default:
      return state
  }
}

