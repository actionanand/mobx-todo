import { createContext, useContext } from 'react';

import TodoStore from './TodoStore';

const store = {
  todos: new TodoStore(),
};

export const StoreCtx = createContext(store);

export const useStore = () => {
  // return useContext<typeof store>(storeCtx);
  return useContext(StoreCtx) as typeof store;
};

export default store;
