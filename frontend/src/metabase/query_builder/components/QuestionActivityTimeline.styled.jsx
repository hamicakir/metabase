import styled from "styled-components";

import ActionButton from "metabase/components/ActionButton";
import { color } from "metabase/lib/colors";

export const RevertButton = styled(ActionButton).attrs({
  successClassName: "",
  failedClassName: "",
})`
  padding: 0;
  border: none;
  color: ${color("text-dark")};
  font-size: 0.875em;

  &:hover {
    background-color: transparent;
    color: ${color("accent3")};
  }
`;
