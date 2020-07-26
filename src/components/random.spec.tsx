import React from "react";
import { render } from "@testing-library/react";
import RandomComponent from "./random";

describe("Random", () => {
  test("", () => {
    const { container } = render(<RandomComponent />);

    expect(container).toContainHTML("<h1>Hello World</h1>");
  });
});
