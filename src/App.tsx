// import { useState, useEffect } from 'react';

// import { autorun, reaction, observable, runInAction, when } from 'mobx';
import { observer, useLocalObservable } from 'mobx-react-lite';

import styles from './App.module.css';

import { useStore } from './store';
import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';

const App = () => {
  const { todos } = useStore();

  /*
  const [todosVisible, setTodosVisible] = useState(true);
  const clickHandler = () => setTodosVisible(prevState => !prevState);
  */

  /*
  // using `useState` with `mobx` observable
  const [appUI] = useState(() =>
    observable({
      todosVisible: true,
      toggleTodoVisibility() {
        this.todosVisible = !this.todosVisible;
      },
    }),
  );
  */

  /*
  // `autorun`
  useEffect(() => {
    const dispose = autorun(
      () => {
        // `autorun` won't run if object doesn't change
        console.log(todos.list.length);
        throw new Error('An error has occurred!');
      },
      {
        delay: 1000,
        onError: err => console.info(err.message),
      },
    );

    return () => {
      dispose();
    };
  }, []);
  */

  /* 
  // reaction
  useEffect(() => {
    const dispose = reaction(
      () => {
        return {
          length: todos.list.length,
          unfinishedTodos: todos.unfinishedTodos,
        };
      },
      (newValue, oldValue) => {
        console.log(newValue.length, newValue, oldValue);
        throw new Error('An error has occurred!');
      },
      {
        delay: 1000,
        onError: err => console.info(err.message),
      },
    );

    return () => {
      dispose();
    };
  }, []);
  */

  /*
  // `when` reaction. It'll run one time only.
  useEffect(() => {
    const displose = when(
      () => !appUI.todosVisible,
      () => {
        console.log('clean up!');
      },
    );

    return () => {
      displose();
    };
  }, []);
  */

  /*
  // `when` reaction. It'll run one time only.
  useEffect(() => {
    const promiseWhen = when(() => !appUI.todosVisible);

    promiseWhen.then(() => {
      console.log('clean up!');
    });

  }, []);
  */

  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    toggleTodoVisibility() {
      this.todosVisible = !this.todosVisible;
    },
  }));

  const clickHandler = () => appUI.toggleTodoVisibility();

  /*
  // Running async code (async action)
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    toggleTodoVisibility() {
      this.loading = true;

      new Promise(resolve => setTimeout(() => resolve(void 0), 1000)).then(
        () => {
          runInAction(() => {
            this.loading = false;
            this.todosVisible = !this.todosVisible;
          });
        },
      );
    },
  }));
  */

  /*
  // Running async code (async action) -> using generator function
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    *toggleTodoVisibility() {
      this.loading = true;

      yield new Promise(resolve => setTimeout(() => resolve(void 0), 1000));

      this.loading = false;
      this.todosVisible = !this.todosVisible;
    },
  }));
  */

  /*
  // using `primitive` value as observale. you can use `box` to achieve this.
  // it's advised to use `useState` when it comes to `primitive`
  const todosVisible = observable.box(true);
  todosVisible.observe_(({ newValue }) => {
    console.log('New primitive value is ', newValue);
  });
  todosVisible.set(false);
  todosVisible.set(true);
  todosVisible.set(false);
  */

  return (
    <div className="App">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={clickHandler}>
          <span> {appUI.todosVisible ? '-' : '+'} </span>
          Todos (Unfinished {todos.unfinishedTodos.length})
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
