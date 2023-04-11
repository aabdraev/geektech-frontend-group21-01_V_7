import React from 'react'
import { useDispatch } from 'react-redux'
import MyButton from './ui/myButton/MyButton'
import MyInput from './ui/myInput/MyInput'
import { deleteTodo, changeStatus, openModal } from '../store/todoSlice'


const TodoCard = ({ todoInfo }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteTodo(todoInfo.id))
    }

    const handleChecked = (e) => {
        const todo = {
            status: e.target.checked,
            id: todoInfo.id
        }
        dispatch(changeStatus(todo))
    }

    const handleOpen = () => {
        const todo = {
            text: todoInfo.text,
            id: todoInfo.id
        }
        dispatch(openModal(todo))
    }


    return (
        <div className='todo'>
            <MyInput
                type='checkbox'
                onChange={handleChecked}
            />
            <p className={todoInfo.status && "active"}>{todoInfo.id}. {todoInfo.text}</p>
            <div>
                <MyButton onClick={handleOpen}>edit</MyButton>
                <MyButton onClick={handleDelete}>delete</MyButton>
            </div>
        </div>
    )
}

export default TodoCard