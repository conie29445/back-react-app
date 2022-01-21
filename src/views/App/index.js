import logo from '~/images/logo.svg';
import styled from 'styled-components'

const ImgLogo = styled.img`
  width: 16px;
  height: 16px
`

function App() {
  return (
    <div className="App">
      <ImgLogo src={logo} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
