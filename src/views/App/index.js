import logo from '~/images/logo.svg';
import styled from 'styled-components'

const ImgLogo = styled.img`
  width: 120px;
  height: 120px
`

function App () {
  return (
    <div className="app__wrap">
      <ImgLogo src={logo} />
    </div>
  )
}

export default App;
