import React, { useRef } from 'react';
import classes from './AddTodo.module.css';

const AddTodo = (props) => {

  const titleRef = useRef('');
  const descriptionRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const item = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      author: 'Justin',
      done: false,
    }

    props.addItemHandler(item);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div>
        <input className={classes.inputtaskname} type='text' id='title' ref={titleRef} placeholder="Task name"/>
      </div>
      <div>
        <textarea className={classes.inputdescription} rows='1' id='description' ref={descriptionRef} placeholder="Description"></textarea>
      </div>
      <button className={classes.addtask}>Add task</button>
    </form>
  );
}

export default AddTodo;