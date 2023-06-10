import { useState } from "react";
import Box from "@mui/material/Box";

const TodoItem = (props) => {
  const [active, setActive] = useState(true);

  const toggleHandler = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <Box>
      <div
        style={{ textDecoration: !active ? "line-through" : undefined }}
        onClick={toggleHandler}
      >
        {props.title}
      </div>
    </Box>
  );
};

export default TodoItem;
