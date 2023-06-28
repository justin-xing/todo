import React, { useRef } from 'react';

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
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <textarea rows='5' id='description' ref={descriptionRef}></textarea>
      </div>
      <button>Add Task</button>
    </form>
  );
}

export default AddTodo;