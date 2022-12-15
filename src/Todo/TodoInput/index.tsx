import { FormEvent } from 'react';
// import { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './TodoInput.module.css';

import { useStore } from '../../store';

const TodoInput = () => {
  const { todos } = useStore();

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const formData = new FormData(formEl);
    const value = String(formData.get('todo-name') || '');

    todos.add(value);
    formEl.reset();
  };

  return (
    <form onSubmit={handleOnSubmit} className={styles['todo-input-group']}>
      <input type="text" name="todo-name" placeholder="Add your todo.." />
      <button type="submit"> Add Todo </button>
    </form>
  );

  /*
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
  */
};

export default TodoInput;
