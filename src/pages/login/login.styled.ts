import styled, { css } from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  min-height: 100vh;
`;

export const Wrapper = styled.section`
  padding: 0 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 4rem;
    flex-direction: row;
  }
`;

export const Box = styled.div`
  margin: 1rem 0;
  flex: 1;
  display: flex;

  @media (min-width: 992px) {
    margin: 0 2rem;
  }

  &:first-of-type,
  &:last-of-type {
    justify-content: center;
    @media (min-width: 992px) {
      align-items: center;
    }
  }

  &:first-of-type {
    align-items: flex-end;
    @media (min-width: 992px) {
      justify-content: flex-end;
    }
  }

  &:last-of-type {
    align-items: flex-start;
    @media (min-width: 992px) {
      justify-content: flex-start;
    }
  }
`;

export const Image = styled.img`
  max-width: 80%;
  @media (min-width: 768px) {
    max-width: 100%;
  }
`;
