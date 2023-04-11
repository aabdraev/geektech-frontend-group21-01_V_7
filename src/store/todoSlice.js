import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
    todos: [],
    isModal: false,
    editId: "",
    editValue: ""
}

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: initialState,
    reducers: {
        changeTodoValue: (state, action) => {
            state.value = action.payload
        },
        addTodo: (state, action) => {
            let id = 1
            if (state.todos.length > 0) {
                id = state.todos[state.todos.length - 1].id + 1
            }
            state.todos = [...state.todos,
            {
                id,
                text: action.payload,
                status: false
            }]
            state.value = ""
        },
        deleteTodo: (state, action) => {
            const id = action.payload
            const filteredTodos = state.todos.filter(item => +item.id !== +id)

            state.todos = filteredTodos
        },
        changeStatus: (state, action) => {
            const id = action.payload.id
            const status = action.payload.status

            const newArray = state.todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        status
                    }
                }
                else return item
            })

            state.todos = newArray
        },
        clearTodos: (state, action) => {
            state.todos = []
        },
        openModal: (state, action) => {
            state.isModal = true
            state.editId = action.payload.id
            state.editValue = action.payload.text
        },
        closeModal: (state, action) => {
            state.isModal = false
        },
        changeEditValue: (state, action) => {
            state.editValue = action.payload
        },
        editTodo: (state, action) => {
            const id = state.editId
            const editedArray = state.todos.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        text: action.payload
                    }
                }
                else return item
            })
            state.todos = editedArray
            state.isModal = false
        }
    }
})

export const { changeTodoValue, addTodo, deleteTodo, changeStatus, clearTodos, openModal, closeModal, editTodo, changeEditValue } = todoSlice.actions

export default todoSlice.reducer