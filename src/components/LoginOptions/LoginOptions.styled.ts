import styled, { css } from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  & + button {
    margin-left: 1.5rem;
  }

  img {
    height: 3rem;
  }
`;

export const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
`;
