import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { Heading, theme } from "./index";

const levels = [1, 2, 3, 4, 5, 6];
const lineHeights = ["1.5em", 1.5];

describe("Heading", () => {
  it("should render the component without props", () => {
    render(<Heading data-testid={`withoutProps`}>Test</Heading>);
    expect(screen.getByTestId("withoutProps")).toBeInTheDocument();
  });

  it("should render the correct children", () => {
    render(<Heading>Children Test</Heading>);
    expect(
      screen.getByRole("heading", { name: /Children Test/i })
    ).toBeInTheDocument();
  });

  it("should render with line", () => {
    render(
      <Heading data-testid="line" line>
        Test
      </Heading>
    );
    expect(screen.getByTestId("line")).toHaveStyleRule("display", "flex");
  });

  it("should render with different levels", () => {
    levels.map((level) => {
      render(
        <Heading level={level} data-testid={`h${level}`}>
          Test
        </Heading>
      );
      expect(screen.getByTestId(`h${level}`).tagName.toLowerCase()).toBe(
        `h${level}`
      );
    });
  });

  it("should render with different font sizes", () => {
    Object.keys(theme.sizes).map((size, index) => {
      render(
        <Heading size={size} data-testid={`size${index}`}>
          Test
        </Heading>
      );
      expect(screen.getByTestId(`size${index}`)).toHaveStyleRule(
        "font-size",
        theme.sizes[size]
      );
    });
  });

  it("should render with different colors", () => {
    Object.keys(theme.colors).map((color, index) => {
      render(
        <Heading color={color} data-testid={`color${index}`}>
          Test
        </Heading>
      );
      expect(screen.getByTestId(`color${index}`)).toHaveStyleRule(
        "color",
        theme.colors[color]
      );
    });
  });

  it("should render with different font weights", () => {
    Object.keys(theme.weights).map((weight, index) => {
      render(
        <Heading weight={weight} data-testid={`weight${index}`}>
          Test
        </Heading>
      );
      expect(screen.getByTestId(`weight${index}`)).toHaveStyleRule(
        "font-weight",
        String(theme.weights[weight])
      );
    });
  });

  it("should render with different line heights", () => {
    lineHeights.map((lineHeight, index) => {
      render(
        <Heading lineHeight={lineHeight} data-testid={`lineHeight${index}`}>
          Test
        </Heading>
      );
      expect(screen.getByTestId(`lineHeight${index}`)).toHaveStyleRule(
        "line-height",
        String(lineHeight)
      );
    });
  });
});
