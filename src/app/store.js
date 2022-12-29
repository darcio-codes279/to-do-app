import { configureStore } from '@reduxjs/toolkit';

// A way to centralise all the states between components within an app
// app are made of components that have different states
// which can get a bit confusing
// Redux allows us to centralise the states and gives us a
// map of components
// https://www.youtube.com/watch?v=_shA5Xwe8_4

export const store = configureStore({
  reducer: {},
});
