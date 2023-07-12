import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { todoActions } from '../Store/todo';
import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const TodoPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.todo.todoItems);
  const error = useSelector(state => state.todo.error);
  const loading = useSelector(state => state.todo.loading);

  const fetchItemsHandler = useCallback(async () => {
    dispatch(todoActions.setLoading());
    dispatch(todoActions.setError(null));
    try {
      const response = await fetch('https://react-todo-d6391-default-rtdb.firebaseio.com/tasks.json');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const data = await response.json();

      const loadedItems = [];

      for (const key in data) {
        loadedItems.push({
          key: key,
          title: data[key].title,
          description: data[key].description,
          author: data[key].author,
          done: data[key].done,
        })
      }

      dispatch(todoActions.setItems(loadedItems));
    } catch (err) {
      dispatch(todoActions.setError(err.message));
    }
    dispatch(todoActions.setLoading(false));
  }, [dispatch]);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  const addItemHandler = async (item) => {
    const response = await fetch('https://react-todo-d6391-default-rtdb.firebaseio.com/tasks.json', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    fetchItemsHandler();
  }

  let content = <p>No tasks! Enjoy!</p>;

  if (items.length > 0) {
    content = <TodoList items={items}/>;
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (loading) {
    content = <p>Loading...</p>
  }

  return (
    <>
      <section>{content}</section>
      <AddTodo addItemHandler={addItemHandler}/>
    </>
  );
};

export default TodoPage;