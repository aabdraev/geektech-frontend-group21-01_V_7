import React from 'react'
import MyButton from '../components/ui/myButton/MyButton'
import MyInput from '../components/ui/myInput/MyInput'
import { changeTodoValue, addTodo, clearTodos } from '../store/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import TodoCard from '../components/TodoCard'
import ModalWindow from '../components/ModalWindow'

const MainPage = () => {

    const dispatch = useDispatch()
    const { value, todos, isModal } = useSelector(state => state.todoReducer)

    const handleChange = (e) => {
        dispatch(changeTodoValue(e.target.value))
    }

    const handleAdd = () => {
        if (value.trim() === "") {
            alert("enter task...")
            return
        }
        dispatch(addTodo(value))
    }

    const handleClear = () => {
        dispatch(clearTodos())
    }

    return (
        <div className='main__inner'>
            <h2>todo list</h2>
            <div className='todo_list'>
                <div className='list__btns'>
                    <MyInput
                        type='text'
                        placeholder='enter todo...'
                        onChange={handleChange}
                        value={value}
                    />
                    <MyButton
                        onClick={handleAdd}
                    >
                        add
                    </MyButton>
                    <MyButton
                        onClick={handleClear}
                    >
                        clear
                    </MyButton>
                </div>
                {
                    todos.length > 0
                        ?
                        todos.map(item => <TodoCard key={item.id} todoInfo={item} />)
                        :
                        <p>nothing to do...</p>
                }
            </div>
            {
                isModal && (
                    <ModalWindow />
                )

            }
        </div>
    )
}

export default MainPage