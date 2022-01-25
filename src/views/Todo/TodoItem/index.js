import { MuiButton } from '@/components/base'
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

const TodoItem = ({ todo }) => {
  return (
    <TodoItemWrap className="todo__item">
      <TodoContent>{todo}</TodoContent>
      <TodoButtonWrap>
        <MuiButton
          variant="contained"
        >
          已完成
        </MuiButton>
        <MuiButton
          variant="outlined"
        >
          刪除
        </MuiButton>
      </TodoButtonWrap>
    </TodoItemWrap>
  )
}
export default TodoItem
