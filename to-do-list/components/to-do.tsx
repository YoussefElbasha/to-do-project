import { ChangeEventHandler, FC, FormEventHandler, useRef } from "react";
import styles from "../styles/ToDo.module.css";

interface Props {
  text?: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
}

const Todo: FC<Props> = ({ text, handleChange, handleSubmit }) => {
  const valueRef = useRef<HTMLInputElement>(null);

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
