import { ChangeEventHandler, FC, FormEvent, FormEventHandler, useRef, useState } from "react";
import styles from "../styles/ToDo.module.css";

const Todo: FC = () => {

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="placeholder"
          placeholder="edit me"
          onChange={handleChange}
          value={text}
        />
        <button type="submit">change text</button>
      </form>
    </div>
  );
};

export default Todo;
