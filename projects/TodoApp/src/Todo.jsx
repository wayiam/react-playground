import { useState } from 'react';
import './styles.css';

function generateId() {
  return Date.now().toString(36); // Unique ID based on timestamp
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (!inputValue.trim()) return; // Prevent adding empty todos

    const newTodo = {
      text: inputValue,
      id: generateId(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInputValue('');
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="todo-heading" style={{ marginBottom: "50px" }}>Task Tracker 📝</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          placeholder="What needs to be done?"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => handleRemoveTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
