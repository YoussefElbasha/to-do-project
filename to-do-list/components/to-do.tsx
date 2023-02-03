import { FC, FormEvent, useState } from 'react'
import styles from '../styles/ToDo.module.css'
import todoStatus from '../constants/status'

interface props {
	deleteHandler: () => void
	inputSubmitHandler: (text: string) => void
	statusSubmitHandler: (status: string) => void
	input: any
	status: todoStatus
}

const Todo: FC<props> = ({
	deleteHandler,
	inputSubmitHandler,
	statusSubmitHandler,
	input,
	status,
}) => {
	const [text, setText] = useState<string>(input)

	const handleInputSubmit = (e: any) => {
		setText(e.currentTarget.value)
		inputSubmitHandler(text)
		e.preventDefault()
	}

	const handleStatusSubmit = (e: any) => {
		statusSubmitHandler(e.currentTarget.value)
	}

	// const handleChange = (e: any) => {
	// 	setText(e.currentTarget.value)
	// }

	return (
		<div>
			<form /* onSubmit={handleInputSubmit} */>
				<input
					type="text"
					aria-label="placeholder"
					placeholder="edit me"
					onChange={handleInputSubmit}
					value={text}
				/>
				<select
					onChange={handleStatusSubmit}
					name="status"
					defaultValue={status}
				>
					<option value="IN_PROGRESS">In progress</option>
					<option value="COMPLETED">Completed</option>
					<option value="ON_HOLD">On hold</option>
				</select>
				<button onClick={deleteHandler} type="button">
					Delete
				</button>
			</form>
		</div>
	)
}

export default Todo
