import { createSlice } from '@reduxjs/toolkit';

const getIntialTodo = () => {
  //
  const localTodoList = window.localStorage.getItem('todolist');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};
const initialValue = {
  todoList: getIntialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      // This gets to-do list from local storage
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        // Creates an array by parsing it
        const todoListArr = JSON.parse(todoList);
        // Pushes new to-do array
        todoListArr.push({
          ...action.payload,
        });
        // Turns to-do array into string
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } // if we have no to-do list in local storage
      //   else {
      //     window.localStorage.setItem(
      //       'todoList',
      //       JSON.stringify([{ ...action.payload }])
      //     );
      //   }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
