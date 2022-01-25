import Button from '@mui/material/Button'
import styled from 'styled-components'

const TodoItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid #eee;
  margin: 16px;
  border-radius: 8px;
  :hover {
    background-color: #eee;
  }
`

const TodoContent = styled.div`
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 8px;
`

const TodoButtonWrap = styled.div``

const TodoItem = ({ todo, handleTodoDelete, handleToggleIsDone }) => {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id)
  }
  const handleDeleteClick = () => {
    handleTodoDelete(todo.id)
  }
  return (
    <TodoItemWrap className="todo__item">
      <TodoContent>{ todo.content }</TodoContent>
      <TodoButtonWrap>
        <Button
          variant="contained"
          color = { todo.isDone ? 'success' : 'primary' }
          onClick = {() => { handleToggleClick() }}
        >
          { todo.isDone ? '已完成' : '未完成' }
        </Button>
        <Button
          variant = "outlined"
          onClick = {() => { handleDeleteClick() }}
          sx = {{
            marginLeft: '8px',
          }}
        >
          刪除
        </Button>
      </TodoButtonWrap>
    </TodoItemWrap>
  )
}
export default TodoItem
