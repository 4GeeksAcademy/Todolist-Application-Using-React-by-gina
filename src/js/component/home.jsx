import React, { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const newTodo = {
        id: Date.now(),
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="notebook my-5">
      <h1 className="title">To Do</h1>
      <ul className="todo-list">
        <li>
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyPress={handleKeyPress}
            placeholder="What to do"
            className="input-task"
          />
        </li>
        {todos.length === 0 ? (
          <li className="empty-task">No tasks, add tasks</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.text}</span>
              <button
                className="delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="task-count">{todos.length} item left</div>
    </div>
  );
};

export default Home;