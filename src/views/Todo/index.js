import { MuiButton } from '@/components/base'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'
import TodoItem from './TodoItem'

function Todo () {
  const AddWrap = styled.div`
    display: flex;
    padding: 16px;
    & button {
      width: 120px;
      margin-left: 16px;
    }
  `
  const [todos, setTodos] = useState ([
    {
      id: 1,
      content: 'do homework',
    },
    {
      id: 2,
      content: 'working',
    },
    {
      id: 3,
      content: 'studying',
    },
  ])

  const inputRef = useRef()
  
  return (
    <div className="todo">
      <AddWrap className="add__wrap">
        <TextField
          inputRef={inputRef}
          label="輸入新增項目"
          fullWidth
        />
        <MuiButton
          variant="contained"
        >
            新增項目
        </MuiButton>
      </AddWrap>

      {
        todos.map(todo => 
          <TodoItem
            key={ todo.id }
            todo={ todo.content }
          />)
      }
    </div>
  )
}

export default Todo;
