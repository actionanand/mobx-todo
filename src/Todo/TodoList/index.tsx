import { observer } from 'mobx-react-lite';

import styles from './TodoList.module.css';

import TodoStore, { Todo } from '../../store/TodoStore';

const TodoList = ({ todos }: { todos: TodoStore }) => {
  const toggleTodoHandler = (todo: Todo) => () => todos.toggle(todo);
  const removeTodoHandler = (id: string) => () => todos.remove(id);

  return (
    <ul className={styles['todo-list']}>
      {todos.list.map(el => (
        <li key={el.id}>
          <label htmlFor={el.id} className={el.isDone ? styles.done : ''}>
            {el.title}
          </label>

          <button
            onClick={removeTodoHandler(el.id)}
            className={[styles.remove, el.isDone && styles.done].join(' ')}
          >
            Remove
          </button>

          <button onClick={toggleTodoHandler(el)}>
            <input type="checkbox" id={el.id} readOnly tabIndex={-1} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default observer(TodoList);
