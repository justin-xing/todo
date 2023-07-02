import TodoItem from "./TodoItem";
import classes from "./Todolist.module.css";

const TodoList = (props) => {
  return (
    <div className={classes.listcontainer}>
      <p className={classes.currenttasks}>Current Tasks</p>
      <ul className={classes.listcontent}>
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
    </div>
  );
};

export default TodoList;