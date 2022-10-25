import { FormEvent, useState } from "react";
import Todo from "../components/to-do";

const PersonalList = () => {
  const [text, setText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setText(text);
    event.preventDefault();
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <Todo
        text={text}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></Todo>
    </div>
  );
};

export default PersonalList;
