import styled from "styled-components";

export const StyledMenuItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 2% 1% 2% 5%;
  cursor: pointer;

  color: ${(props) => (props.isSelected ? "whiteSmoke" : "#99b4cc")};

  border-left: ${(props) =>
    props.isSelected ? "6px solid whiteSmoke" : "none"};
  /* border: 10px solid blue; */
  /* border-radius: 0% 10% 10% 0%; */
  /* border-top-left-radius: -80px 10px; */
  /* border-top-right-radius: -80px 10px; */
  /* border-top-left-radius: 10%; */
  // wtf?

  h5 {
    padding: 5%;
  }

  svg {
  }

  :hover {
    /* background-color: whiteSmoke; */
    color: #fff;
  }
`;

// export const Icon = styled.div`

//   cursor: pointer;
//   pointer-events: auto;
//   padding: 0.2em;
//   p {
//     margin: 0 4em;
//   }

//   color: ${(props) => props.theme.colors.highlight};
//   &.selected {
//     svg {
//       fill: ${(props) => props.theme.colors.highlightActive};
//     }
//   }

//   :hover {
//     svg {
//       fill: ${(props) => props.theme.colors.white};
//     }
//   }
// `;
