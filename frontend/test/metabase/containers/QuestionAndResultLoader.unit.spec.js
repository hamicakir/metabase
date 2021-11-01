import { render } from "@testing-library/react";
import React from "react";

import QuestionAndResultLoader from "metabase/containers/QuestionAndResultLoader";

describe("QuestionAndResultLoader", () => {
  it("should load a question and a result", () => {
    render(<QuestionAndResultLoader>{() => <div />}</QuestionAndResultLoader>);
  });
});
