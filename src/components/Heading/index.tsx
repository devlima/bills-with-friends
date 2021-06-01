import styled, { css, attrs, as, withTheme } from "styled-components";
import { globalTheme } from "styles/Theme";

export type HeadingProps = {
  color?: keyof typeof globalTheme.colors;
  size?: keyof typeof globalTheme.sizes;
  weight?: keyof typeof globalTheme.weights;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  line?: boolean;
};

export const Heading = styled("h1").attrs<HeadingProps>(({ level = 1 }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    theme,
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
