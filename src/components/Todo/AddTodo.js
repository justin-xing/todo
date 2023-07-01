import React, { useRef } from 'react';
import './AddTodo.css';

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
    <form className='form' onSubmit={submitHandler}>
      <div>
        <label className='inputlabel' htmlFor='title'>Task name</label>
        <br></br>
        <input className='inputtitle' type='text' id='title' ref={titleRef} placeholder="Task name"/>
      </div>
      <div>
        <label className='inputlabel' htmlFor='description'>Description</label>
        <br></br>
        <textarea className='inputdescription' rows='5' id='description' ref={descriptionRef} placeholder="Description"></textarea>
      </div>
      <button className='addtask'>Add Task</button>
    </form>
  );
}

export default AddTodo;