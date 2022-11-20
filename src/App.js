import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Board from './Board';
import Sidebar from './Sidebar';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'styled-components';
import store from './store/index';
// https://us-central1-opticks-test.cloudfunctions.net/stats
// https://us-central1-opticks-test.cloudfunctions.net/savings


function App() {
  return (
    <Provider store={store}>-
    <div className="App">
      <header className="App-header">
        <Sidebar />
        <Navbar />
        <Board />
      </header>
    </div>
    </Provider>
  );
}

export default App;
