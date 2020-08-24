import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .space {
    margin-top: 64px;
  }

  > main {
    margin: 0 16px;
    display: flex;
    justify-content: center;
  }

  .left-column,
  .right-column {
    display: none;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column {
      display: unset;
    }

    .middle-column {
      margin: 0 16px 16px;
    }
  }
`;
