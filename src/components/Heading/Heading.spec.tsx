import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Heading } from "./index";
import Theme, { globalTheme } from "styles/Theme";

const levels = [1, 2, 3, 4, 5, 6];
const lineHeights = ["1.5em", 1.5];

describe("Heading", () => {
  it("should render the component without props", () => {
    render(
      <Theme>
        <Heading data-testid={`withoutProps`}>Test</Heading>
      </Theme>
    );
    expect(screen.getByTestId("withoutProps")).toBeInTheDocument();
  });

  it("should render the correct children", () => {
    render(
      <Theme>
        <Heading>Children Test</Heading>
      </Theme>
    );
    expect(
      screen.getByRole("heading", { name: /Children Test/i })
    ).toBeInTheDocument();
  });

  it("should render with line", () => {
    render(
      <Theme>
        <Heading data-testid="line" line>
          Test
        </Heading>
      </Theme>
    );
    expect(screen.getByTestId("line")).toHaveStyleRule("display", "flex");
  });

  it("should render with different levels", () => {
    levels.map((level) => {
      render(
        <Theme>
          <Heading level={level} data-testid={`h${level}`}>
            Test
          </Heading>
        </Theme>
      );
      expect(screen.getByTestId(`h${level}`).tagName.toLowerCase()).toBe(
        `h${level}`
      );
    });
  });

  it("should render with different font sizes", () => {
    Object.keys(globalTheme.sizes).map((size, index) => {
      render(
        <Theme>
          <Heading size={size} data-testid={`size${index}`}>
            Test
          </Heading>
        </Theme>
      );
      expect(screen.getByTestId(`size${index}`)).toHaveStyleRule(
        "font-size",
        globalTheme.sizes[size]
      );
    });
  });

  it("should render with different colors", () => {
    Object.keys(globalTheme.colors).map((color, index) => {
      render(
        <Theme>
          <Heading color={color} data-testid={`color${index}`}>
            Test
          </Heading>
        </Theme>
      );
      expect(screen.getByTestId(`color${index}`)).toHaveStyleRule(
        "color",
        globalTheme.colors[color]
      );
    });
  });

  it("should render with different font weights", () => {
    Object.keys(globalTheme.weights).map((weight, index) => {
      render(
        <Theme>
          <Heading weight={weight} data-testid={`weight${index}`}>
            Test
          </Heading>
        </Theme>
      );
      expect(screen.getByTestId(`weight${index}`)).toHaveStyleRule(
        "font-weight",
        String(globalTheme.weights[weight])
      );
    });
  });

  it("should render with different line heights", () => {
    lineHeights.map((lineHeight, index) => {
      render(
        <Theme>
          <Heading lineHeight={lineHeight} data-testid={`lineHeight${index}`}>
            Test
          </Heading>
        </Theme>
      );
      expect(screen.getByTestId(`lineHeight${index}`)).toHaveStyleRule(
        "line-height",
        String(lineHeight)
      );
    });
  });
});
