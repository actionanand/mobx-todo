import { observer } from 'mobx-react-lite';

import TodoStore from '../../store/TodoStore';

const TodoList = ({ todos }: { todos: TodoStore }) => (
  <ul>
    {todos.list.map(el => (
      <li key={el.id}> {el.title} </li>
    ))}
  </ul>
);

export default observer(TodoList);
