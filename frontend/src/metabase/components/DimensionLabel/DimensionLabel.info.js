import React from "react";

import {
  SAMPLE_DATASET,
  PRODUCTS,
  metadata,
} from "__support__/sample_dataset_fixture";
import Dimension from "metabase-lib/lib/Dimension";
import StructuredQuery from "metabase-lib/lib/queries/StructuredQuery";
import NativeQuery from "metabase-lib/lib/queries/NativeQuery";

import DimensionLabel from "./DimensionLabel";

const fieldDimension = Dimension.parseMBQL(
  ["field", PRODUCTS.CATEGORY.id, null],
  metadata,
);

const aggQuery = new StructuredQuery(PRODUCTS.question(), {
  type: "query",
  database: SAMPLE_DATASET.id,
  query: {
    "source-table": PRODUCTS.id,
    aggregation: ["sum", ["field", PRODUCTS.RATING.id, null]],
  },
});
const aggregationDimension = Dimension.parseMBQL(
  ["aggregation", 0],
  metadata,
  aggQuery,
);

const expressionDimension = Dimension.parseMBQL(
  ["expression", "Hello World"],
  metadata,
);

const nativeQuery = new NativeQuery(PRODUCTS.question(), {
  database: SAMPLE_DATASET.id,
  type: "native",
  native: {
    query: "select * from PRODUCTS where CREATED_AT = {{date}}",
    "template-tags": {
      date: {
        id: "abc",
        name: "date",
        "display-name": "Date variable",
        type: "date",
      },
    },
  },
});

const templateTagDimension = Dimension.parseMBQL(
  ["template-tag", "date"],
  metadata,
  nativeQuery,
);

export const component = DimensionLabel;
export const description = "A label for a Dimension";
export const examples = {
  "field dimension": <DimensionLabel dimension={fieldDimension} />,
  "aggregation dimension": <DimensionLabel dimension={aggregationDimension} />,
  "expression dimension": <DimensionLabel dimension={expressionDimension} />,
  "template tag dimension": <DimensionLabel dimension={templateTagDimension} />,
};
