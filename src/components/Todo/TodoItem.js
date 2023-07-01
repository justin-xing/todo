import Box from "@mui/material/Box";
import './TodoItem.css';

const TodoItem = (props) => {

  return (
    <Box>
      <div className='title'>
        {props.title}
      </div>
      <div className='description'>
        {props.description}
      </div>
    </Box>
  );
};

export default TodoItem;
