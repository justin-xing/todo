import TodoItem from "./TodoItem";

const Todo = () => {
  const items = [
    {
      title: "Code front end",
    },
    {
      title: "Code back end",
    },
    {
      title: "Set up docker container",
    },
  ];

  const todoCreate = (item) => {
    return <TodoItem title={item.title} status={item.status} />;
  };

  return items.map(todoCreate);
};

export default Todo;
