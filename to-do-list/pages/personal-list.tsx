import { useState, useEffect } from 'react'
import Todo from '../components/to-do'
import idGenerator from '../lib/idGenerator'
import todoStatus from '../constants/status'

interface todoObject {
	text: string
	id: string
	status: todoStatus
}

const PersonalList = () => {
	const [todos, setTodos] = useState<todoObject[]>([])

	useEffect(() => {
		setTodos(JSON.parse(sessionStorage.getItem('todo_list') || '[]'))
	}, [])

	useEffect(() => {
		console.log(todos)
	}, [todos])

	const inputSubmitHandler = (text: string, id: string) => {
		const tempTodos = todos
		tempTodos.forEach((todo) => {
			if (todo.id === id) {
				todo.text = text
			}
		})
		setTodos(tempTodos)
		console.log(todos)
	}

	const statusSubmitHandler = (status: string, id: string) => {
		const tempTodos = todos
		tempTodos.forEach((todo) => {
			if (todo.id === id) {
				todo.status = status as todoStatus
			}
		})
		setTodos(tempTodos)
		console.log(todos)
	}

	const deleteHandler = (deletedId: string) => {
		const tempTodos = todos.filter((todo) => todo.id !== deletedId)
		setTodos(tempTodos)
	}

	const clickHandler = (event: any) => {
		setTodos([
			...todos,
			{ text: '', id: idGenerator(), status: todoStatus.IN_PROGRESS },
		])
	}

	const save = () => {
		sessionStorage.setItem('todo_list', JSON.stringify(todos))
		console.log(
			'Storage: ',
			JSON.parse(sessionStorage.getItem('todo_list') || '[]')
		)
	}

	const clear = () => {
		sessionStorage.setItem('todo_list', JSON.stringify([]))
		console.log('Storage: ', sessionStorage.getItem('todo_list'))
	}

	return (
		<div>
			<button onClick={clickHandler}>Add to-do task</button>
			{
				<ul>
					{todos.map((todo) => (
						<Todo
							key={todo.id}
							input={todo.text}
							status={todo.status}
							deleteHandler={() => deleteHandler(todo.id)}
							inputSubmitHandler={(text: string) =>
								inputSubmitHandler(text, todo.id)
							}
							statusSubmitHandler={(status: string) =>
								statusSubmitHandler(status, todo.id)
							}
						/>
					))}
				</ul>
			}
			<button onClick={save}>Save</button>
			<button onClick={clear}>Clear Storage</button>
		</div>
	)
}

export default PersonalList
