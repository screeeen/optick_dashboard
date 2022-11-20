

import Navbar from './Navbar';
import Board from './Board';
import Sidebar from './Sidebar';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
import {StyledApp} from './StyledApp'
import store from './store/index';
// https://us-central1-opticks-test.cloudfunctions.net/stats
// https://us-central1-opticks-test.cloudfunctions.net/savings


function App() {
  return (
    <Provider store={store}>-
      <StyledApp>
        <Navbar />
        <Sidebar />
        <Board />
      </StyledApp>
    </Provider>
  );
}

export default App;
