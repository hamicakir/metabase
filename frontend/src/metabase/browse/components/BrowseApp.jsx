/* eslint-disable react/prop-types */
import { Box } from "grid-styled";
import React from "react";

import { PAGE_PADDING } from "metabase/browse/constants";

export default function BrowseApp({ children }) {
  return <Box mx={PAGE_PADDING}>{children}</Box>;
}
