import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "jest-styled-components";
import LoginOptions from "./index";

describe("LoginOptions", () => {
  it("should render correct", () => {
    const { container } = render(<LoginOptions />);
    expect(container.children[0]).toBeInTheDocument();
  });

  it("should click on buttons", () => {
    render(<LoginOptions />);
    const mockClick = jest.fn();
    const buttons = document.getElementsByTagName("button");
    Array.from(buttons).map((button) => {
      button.onclick = mockClick;
      fireEvent.click(button);
    });
    expect(mockClick).toHaveBeenCalled();
    expect(mockClick).toBeCalledTimes(buttons.length);
  });
});
