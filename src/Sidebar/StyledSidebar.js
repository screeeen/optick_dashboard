import styled from "styled-components";

export const StyledSidebar = styled.section`
  width: 18%;
  min-width: 10vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 2% 2% 2% 0;
  color: #99b4cc;

  p {
    font-size: 1em;
    font-weight: bold;
    padding: 2% 0 10% 2%;
  }

  overflow: auto;
  /* z-index: 1; */
  // background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(17, 20, 23, 1) 60%, rgba(17, 20, 23, 1) 100%);
  background: #00447f;
`;
