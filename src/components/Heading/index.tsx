import styled, { css, attrs, as } from "styled-components";

export const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    gray: "#333333",
    darkgray: "#141414",
    offwhite: "#F5F5F5",
  },
  sizes: {
    xsmall: "1rem",
    small: "1.25rem",
    normal: "1.5rem",
    large: "2rem",
  },
  weights: {
    thin: 100,
    regular: 400,
    bold: 700,
  },
};

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  weight?: keyof typeof theme.weights;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  line?: boolean;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "darkgray",
    size = "normal",
    weight = "regular",
    lineHeight = 1.5,
    line = false,
  }) => css`
    font-size: ${theme.sizes[size]};
    line-height: ${lineHeight};
    font-weight: ${theme.weights[weight]};
    color: ${theme.colors[color]};
    ${line &&
    css`
      display: flex;
      align-items: center;
      flex: 1;
      &:after {
        content: "";
        margin-left: 1rem;
        display: block;
        width: 100%;
        height: 1px;
        flex: 1;
        background-color: ${theme.colors[color]};
      }
    `}
  `}
`;
