import PropTypes from "prop-types";
import React from "react";

import Icon from "metabase/components/Icon";
import PopoverWithTrigger from "metabase/components/PopoverWithTrigger";
import { color } from "metabase/lib/colors";
import AggregationPopover from "metabase/query_builder/components/AggregationPopover";

import { updateAndRunQuery } from "../utils";
import { AggregationItemRoot } from "./AggregationItem.styled";

const propTypes = {
  className: PropTypes.string,
  aggregation: PropTypes.object,
  index: PropTypes.number.isRequired,
  query: PropTypes.object,
};

export const AggregationItem = ({ aggregation, index, query }) => {
  return (
    <PopoverWithTrigger
      triggerClasses="flex-full"
      triggerElement={
        <AggregationItemRoot
          color={color("summarize")}
          data-testid="aggregation-item"
        >
          <span className="mx1">{aggregation.displayName()}</span>
          {aggregation.canRemove() && (
            <Icon
              className="flex ml-auto faded fade-in-hover"
              name="close"
              onClick={() => {
                updateAndRunQuery(query.removeAggregation(index));
              }}
            />
          )}
        </AggregationItemRoot>
      }
    >
      {({ onClose }) => (
        <AggregationPopover
          query={query}
          aggregation={aggregation}
          onChangeAggregation={newAggregation => {
            updateAndRunQuery(query.updateAggregation(index, newAggregation));
            onClose();
          }}
          onClose={onClose}
          alwaysExpanded
          showCustom={false}
        />
      )}
    </PopoverWithTrigger>
  );
};

AggregationItem.propTypes = propTypes;
