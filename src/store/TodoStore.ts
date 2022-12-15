import { action, makeObservable, observable } from 'mobx';
import { v4 as uuid } from 'uuid';
// import { computed, makeAutoObservable } from 'mobx';

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

class TodoStore {
  list: Todo[] = [];



  constructor() {
    makeObservable(this, {
      list: observable,
      add: action,
      remove: action,
      toggle: action
    });
  }

  add(title: string) {
    if (title.trim().length < 3 || title.trim().length > 20) {
      return;
    }

    this.list.push({
      id: uuid(),
      title,
      isDone: false
    });
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  remove(id: string) {
    this.list = this.list.filter(el => el.id !== id);
  }
}

/*
  constructor() {
    makeAutoObservable(this); // all properties as observable & methos as action
  }
*/

/*
  constructor() {
    makeAutoObservable(this, {
      add: computed,
      remove: false
    }); 
  }
*/

/*
// mobX using decorators
class TodoStore {
  @observable
  list: Todo[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  add(title: string) {
    if (title.trim().length < 3 || title.trim().length > 20) {
      return;
    }

    this.list.push({
      id: uuid(),
      title,
      isDone: false
    });
  }

  @action
  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  @action
  remove(id: string) {
    this.list = this.list.filter(el => el.id !== id);
  }
}
*/

export default TodoStore;
