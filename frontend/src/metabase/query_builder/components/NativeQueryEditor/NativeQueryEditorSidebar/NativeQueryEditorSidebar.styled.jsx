import styled from "styled-components";

import RunButtonWithTooltip from "metabase/query_builder/components/RunButtonWithTooltip";
import { space } from "metabase/styled-components/theme";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RunButtonWithTooltipStyled = styled(RunButtonWithTooltip)`
  margin: ${space(2)};
  margin-top: auto;
  height: 40px;
  width: 40px;
`;
