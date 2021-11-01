import { render, screen } from "@testing-library/react";
import React from "react";

import LegendVertical from "metabase/visualizations/components/LegendVertical";

describe("LegendVertical", () => {
  it("should render string titles correctly", () => {
    render(<LegendVertical titles={["Hello"]} colors={["red"]} />);
    screen.getByText("Hello");
  });

  it("should render array titles correctly", () => {
    render(<LegendVertical titles={[["Hello", "world"]]} colors={["red"]} />);
    screen.getByText("Hello");
    screen.getByText("world");
  });
});
