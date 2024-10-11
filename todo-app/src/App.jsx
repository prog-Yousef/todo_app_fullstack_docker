import './App.css';
import { useState, useEffect } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const title = 'Todo App';
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch('http://localhost:8002/api/todo');
      const data = await response.json();

      setTodos(data.todos);
    }

    getTodos();
  }, []);

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.todo} done={todo.done} key={todo.id} />
  });

  console.log(todoComponents);

  return (
    <main className='app'>
      <h1>{ title }</h1>
      <ul className='app__todos'>
        { todoComponents }

        {/* <TodoItem task="Köp kaffe" done={true} />
        <TodoItem task="Köp kaka" done={true} />
        <TodoItem task="Brygg kaffe" done={false} />
        <TodoItem task="Drick kaffe" done={false} /> */}
      </ul>
      <AddTodo />
    </main>
  )
}

export default App