import { createSlice } from 'react-redux';
import { useCallback } from 'react';

const fetchItems = useCallback(async (state) => {
  state.loading = true;
  error = null;
  try {
    const response = await fetch('https://react-todo-d6391-default-rtdb.firebaseio.com/');
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json():

    const loadedItems = [];

    for (const key in data) {
      loadedItems.push({
        id: key,
        title: data[key].title,
        author: data[key].author,
        date: data[key].date,
        done: data[key].done,
      })
    }

    state.movies = loadedItems;

  } catch (error){
    currentError = error.message;
  }
  state.loading = false;
}, []);

const todoSlice = createSlice({
  name: 'todo',
  initialState: { movies: [], loading: false, currentError: null },
  reducers: {
    fetchItems,
  }
})