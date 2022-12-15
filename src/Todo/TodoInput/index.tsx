import { ChangeEvent, KeyboardEvent, useState } from 'react';

import TodoStore from '../../store/TodoStore';

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo('');
  };

  const handleEnterBtn = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleButtonClick();
    }
  };

  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleEnterBtn}
      />
      <button onClick={handleButtonClick}> Add Todo </button>
    </>
  );
};

export default TodoInput;
