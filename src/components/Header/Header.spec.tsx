import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Header from "./index";
import Theme from "styles/Theme";

describe("Header", () => {
  it("should render correctly", () => {
    render(
      <Theme>
        <Header />
      </Theme>
    );
    expect(screen.getByRole("banner").tagName.toLocaleLowerCase()).toBe(
      "header"
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("should render title", () => {
    render(
      <Theme>
        <Header />
      </Theme>
    );
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should render title with line", () => {
    render(
      <Theme>
        <Header line={true} />
      </Theme>
    );
    expect(screen.getByRole("heading")).toHaveStyleRule("display", "flex");
  });
});
