

import Navbar from './Navbar';
import Board from './Board';
import Sidebar from './Sidebar';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
import {StyledApp} from './StyledApp'
import store from './store/index';
import { createGlobalStyle } from 'styled-components'
// https://us-central1-opticks-test.cloudfunctions.net/stats
// https://us-central1-opticks-test.cloudfunctions.net/savings

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  `;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <StyledApp>
        <Navbar />
        <Sidebar />
        <Board />
      </StyledApp>
    </Provider>
  );
}

export default App;
