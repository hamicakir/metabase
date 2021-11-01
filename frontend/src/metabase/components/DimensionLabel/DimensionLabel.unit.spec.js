import React from "react";
import { render, screen } from "@testing-library/react";

import { PRODUCTS, metadata } from "__support__/sample_dataset_fixture";
import DimensionLabel from "./DimensionLabel";
import Dimension from "metabase-lib/lib/Dimension";

const fieldDimension = Dimension.parseMBQL(
  ["field", PRODUCTS.CREATED_AT.id, null],
  metadata,
);

function setup({ dimension = fieldDimension } = {}) {
  return render(<DimensionLabel dimension={dimension} />);
}

describe("DimensionLabel", () => {
  beforeEach(() => {
    setup();
  });

  it("should show an icon corresponding to the given dimension's underlying field type", () => {
    expect(screen.queryByLabelText("calendar icon")).toBeInTheDocument();
  });

  it("it should display the given dimension's display name", () => {
    expect(
      screen.getByText(PRODUCTS.CREATED_AT.display_name),
    ).toBeInTheDocument();
  });
});
