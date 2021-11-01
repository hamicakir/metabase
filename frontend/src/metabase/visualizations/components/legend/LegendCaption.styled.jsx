import styled from "styled-components";

import Icon from "metabase/components/Icon";
import colors from "metabase/lib/colors";

export const LegendCaptionRoot = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

export const LegendLabel = styled.div`
  color: ${colors["text-dark"]};
  font-weight: bold;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "")};
  overflow: hidden;

  &:hover {
    color: ${({ onClick }) => (onClick ? colors["brand"] : "")};
  }
`;

export const LegendLabelIcon = styled(Icon)`
  padding-right: 0.25rem;
`;

export const LegendDescriptionIcon = styled(Icon).attrs({
  name: "info",
})`
  color: ${colors["text-medium"]};
  margin-left: 0.5rem;
`;
