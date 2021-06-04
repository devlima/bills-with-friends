import { transformRGBA } from "helpers/transformRGBA";
import styled, { css } from "styled-components";

export const Picture = styled.a`
  ${({ theme }) => css`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    border: 4px solid transparent;
    box-sizing: initial;
    transition: border-color 0.4s ease;

    &:hover,
    &:focus {
      border-color: ${transformRGBA(theme.colors.darkgray, 0.1)};
    }
  `}
`;
