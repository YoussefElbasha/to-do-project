import { useState, useEffect } from "react";
import Todo from "../components/to-do";

const PersonalList = () => {
  const [todos, setTodos] = useState<string[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const submitHandler = (text: string, index: number) => {
    const tempTodos = todos;
    tempTodos[index] = text;
    setTodos(tempTodos);
    console.log(todos);
  };

  const deleteHandler = (deletedKey: number) => {
    const tempTodos = todos.filter((todo, index) => index !== deletedKey);
    setTodos(tempTodos);
  };

  const clickHandler = (event: any) => {
    setTodos([...todos, ""]);
  };

  const save = () => {
    sessionStorage.setItem("todo_list", todos.toString());
    console.log("Storage: " + sessionStorage.getItem("todo_list")?.split(","));
  };

  return (
    <div>
      <button onClick={clickHandler}>Add to-do task</button>
      <ul>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            input={todo}
            deleteHandler={() => deleteHandler(index)}
            submitHandler={(text: string) => submitHandler(text, index)}
          />
        ))}
      </ul>
      <button onClick={save}>Save</button>
    </div>
  );
};

export default PersonalList;
