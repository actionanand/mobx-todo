import TodoStore from './store/TodoStore';
import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';

const todos = new TodoStore();

const App = () => {
  return (
    <div className="App">
      <TodoInput todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
