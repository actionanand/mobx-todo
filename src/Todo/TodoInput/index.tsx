import { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './TodoInput.module.css';

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
    <div className={styles['todo-input-group']}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        onKeyDown={handleEnterBtn}
      />
      <button onClick={handleButtonClick}> Add Todo </button>
    </div>
  );
};

export default TodoInput;
