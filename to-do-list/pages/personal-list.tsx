import { FC, FormEvent, ReactElement, useState } from "react";
import Todo from "../components/to-do";

const PersonalList = () => {
  
  const [todos, setTodos] = useState<ReactElement[]>([]);

  const handleClick = (event: any) => {
    setTodos([<Todo/>,...todos])
  }

  return (
    <div>
      <ul>{todos}</ul>
      <button onClick={handleClick}>Add to-do task</button>
    </div>
  );
};

export default PersonalList;
