import React from 'react'
import MyInput from './ui/myInput/MyInput'
import MyButton from './ui/myButton/MyButton'
import { useDispatch, useSelector } from 'react-redux'
import { changeEditValue, closeModal, editTodo } from '../store/todoSlice'

const ModalWindow = () => {


    const { editValue } = useSelector(state => state.todoReducer)
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(closeModal())
    }

    const handleChange = (e) => {
        dispatch(changeEditValue(e.target.value))
    }

    const handleEdit = () => {
        dispatch(editTodo(editValue))
    }

    return (
        <div className='modal__wrapper'>
            <div className='modal__inner'>
                <h4>edit todo</h4>
                <div>
                    <MyInput type='text' placeholder={editValue} onChange={handleChange} />
                    <MyButton onClick={handleEdit}>save</MyButton>
                    <MyButton onClick={handleClose}>cancel</MyButton>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow