import { render } from "@testing-library/react";
import "jest-styled-components";
import Avatar from "./index";
import Theme from "styles/Theme";

describe("Avatar", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Theme>
        <Avatar />
      </Theme>
    );
    expect(container.children[0]).toBeInTheDocument();
  });

  it("should render correctly", () => {
    const { container } = render(
      <Theme>
        <Avatar user="test" />
      </Theme>
    );
    expect(container.children[0].getAttribute("href")).toBe("/profile/test");
  });
});
