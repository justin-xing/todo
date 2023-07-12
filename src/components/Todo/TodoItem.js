import React, { useState } from 'react';
import Box from "@mui/material/Box";
import classes from './TodoItem.module.css';

const TodoItem = (props) => {
  const [done, setDone] = useState(false);
  const toggleDoneHandler = () => {
    setDone((prevState) => !prevState);
  }

  return (
    <Box className={`${classes.todoitemcontainer} ${ done ? classes.finished : null}`} onClick={toggleDoneHandler}>
      <div className={`${classes.taskname} ${ done ? classes.strikethrough : null}`}>
        {props.title}
      </div>
      <div className={`${classes.description} ${ done ? classes.strikethrough : null}`}>
        {props.description}
      </div>
    </Box>
  );
};

export default TodoItem;