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
        <label className={classes.inputlabel} htmlFor='title'>Task name</label>
        <br></br>
        <input className={classes.inputtaskname} type='text' id='title' ref={titleRef} placeholder="Task name"/>
      </div>
      <div>
        <label className={classes.inputlabel} htmlFor='description'>Description</label>
        <br></br>
        <textarea className={classes.inputdescription} rows='5' id='description' ref={descriptionRef} placeholder="Description"></textarea>
      </div>
      <button className={classes.inputaddtask}>Add task</button>
    </form>
  );
}

export default AddTodo;