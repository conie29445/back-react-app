import { MuiButton } from '@/components/base'
import { useState } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import TodoItem from './TodoItem'

const AddWrap = styled.div`
  display: flex;
  padding: 16px;
  & button {
    width: 120px;
    margin-left: 16px;
  }
`

let id = 3
function Todo () {
  const [todos, setTodos] = useState ([
    {
      id: 1,
      content: 'test todo',
      isDone: false,
    },
    {
      id: 2,
      content: 'test todo',
      isDone: true,
    },
  ])

  const [inputValue, setInputValue] = useState('')

  const handleAddButtonClick = () => {
    setTodos([
      {
        id,
        content: inputValue,
        isDone: false,
      },
      ...todos,
    ])
    setInputValue('')
    id++
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleTodoDelete = id => {
    setTodos(
      todos.filter((todo) => todo.id !== id ),
    )
  }
  const handleToggleIsDone = id => {
    setTodos(
      todos.map((todo) => {
        if(todo.id === id)
          todo.isDone = !todo.isDone
        return todo
      }),
    )
  }
  
  return (
    <div className="todo">
      <AddWrap className="add__wrap">
        <TextField
          label = "輸入新增項目"
          fullWidth
          value = {inputValue}
          onChange = {handleInputChange}
        />
        <MuiButton
          variant = "contained"
          onClick = {handleAddButtonClick}
        >
            新增項目
        </MuiButton>
      </AddWrap>

      {
        todos.map(todo => 
          <TodoItem
            key = { todo.id }
            todo = { todo }
            handleTodoDelete = { handleTodoDelete }
            handleToggleIsDone = { handleToggleIsDone }
          />)
      }
    </div>
  )
}

export default Todo;
