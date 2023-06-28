import Box from "@mui/material/Box";

const TodoItem = (props) => {

  return (
    <Box>
      <div>
        {props.title}
      </div>
      <div>
        {props.description}
      </div>
      <div>
        {props.done ? "Done" : "Not Done"}
      </div>
    </Box>
  );
};

export default TodoItem;
