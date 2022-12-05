import { FC, FormEvent, useState } from "react";
import styles from "../styles/ToDo.module.css";

interface props {
  deleteHandler: () => void;
  submitHandler: (text: string) => void;
  input?: any;
}

const Todo: FC<props> = ({ deleteHandler, submitHandler, input }) => {
  const [text, setText] = useState<string>(input);

  const handleSumbit = (e: FormEvent<HTMLFormElement>) => {
    submitHandler(text);
    e.preventDefault();
  };

  const handleChange = (e: any) => {
    setText(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          aria-label="placeholder"
          placeholder="edit me"
          onChange={handleChange}
          value={text}
        />
        <button onClick={deleteHandler} type="button">
          Delete
        </button>
      </form>
    </div>
  );
};

export default Todo;
