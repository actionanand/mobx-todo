import TodoStore from './TodoStore';

let todos = TodoStore();

describe('TodoList', () => {
  beforeEach(() => {
    todos = TodoStore();
  });

  it('Adding `todo`', () => {
    todos.add('My test todo');

    expect(todos.list.length).toBe(1);
    expect(todos.list.find(el => el.title === 'My test todo')).toBeDefined();
  });

  it('Removing `todo`', () => {
    todos.add('My test todo');
    expect(todos.list.length).toBe(1);

    todos.remove(todos.list[0].id);
    expect(todos.list.length).toBe(0);
  });

  it('Toggle a todo', () => {
    todos.add('My test todo');
    todos.toggle(todos.list[0]);

    expect(todos.list[0].isDone).toBeTruthy();
    expect(todos.unfinishedTodos.length).toBe(0);
  });

  it('Unfinished todos', () => {
    todos.add('My test todo 1');
    todos.add('My test todo 2');
    todos.toggle(todos.list[0]);
    
    expect(todos.unfinishedTodos.length).toBe(1);
  });

  it('Can not add an empty todo', () => {
    todos.add('   ');

    expect(todos.list.length).toBe(0);
  });

  it('Can not add todo with less than 3 char & greater than 20 char', () => {
    todos.add('My  ');
    todos.add('Can not add todo with less than 3 char & greater than 20 char');

    expect(todos.list.length).toBe(0);
  });

  it('Can add todo with char 3 and char 20', () => {
    todos.add('123');
    todos.add('12345678901234567890');

    expect(todos.list.length).toBe(2);
  });
});
