import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
          <li key={item.key}>
            <TodoItem
              title={item.title}
              description={item.description}
              author={item.author}
              done={item.done}
            />
          </li>
        ))}
      </ul>
  );
}

export default TodoList;