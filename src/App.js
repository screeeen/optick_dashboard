import { Provider } from "react-redux";
// import { ThemeProvider } from 'styled-components';
import store from "./store/index";
import { createGlobalStyle } from "styled-components";
import DashboardContainer from "./DashboardContainer";
import styled from "styled-components";

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
        <DashboardContainer />
      </StyledApp>
    </Provider>
  );
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fffefe;
  overflow: hidden; /* Hide scrollbars */
`;
