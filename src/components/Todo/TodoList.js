import TodoItem from './TodoItem';
import './Todolist.css';

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

const TodoList = (props) => {
  return (
    <div className='list-container'>
        <ul className='list-content'>
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
}

export default TodoList;