import React from "react";

import type {
  Card as CardObject,
  DatasetQuery,
} from "metabase-types/types/Card";
import type { QueryMode } from "metabase-types/types/Visualization";

// import TimeseriesGroupingWidget
//     from "metabase/modes/components/TimeseriesGroupingWidget";
import TimeseriesFilterWidget from "metabase/modes/components/TimeseriesFilterWidget";
import TimeseriesGroupingWidget from "metabase/modes/components/TimeseriesGroupingWidget";

import { getDefaultDrills } from "../drill";
import PivotByCategoryDrill from "../drill/PivotByCategoryDrill";
import PivotByLocationDrill from "../drill/PivotByLocationDrill";

type Props = {
  lastRunCard: CardObject,
  setDatasetQuery: (datasetQuery: DatasetQuery) => void,
  runQuestionQuery: () => void,
};

export const TimeseriesModeFooter = (props: Props) => {
  return (
    <div className="flex layout-centered">
      <span className="mr1">View</span>
      <TimeseriesFilterWidget {...props} card={props.lastRunCard} />
      <span className="mx1">by</span>
      <TimeseriesGroupingWidget {...props} card={props.lastRunCard} />
    </div>
  );
};

const TimeseriesMode: QueryMode = {
  name: "timeseries",
  drills: () => [
    PivotByCategoryDrill,
    PivotByLocationDrill,
    ...getDefaultDrills(),
  ],
  ModeFooter: TimeseriesModeFooter,
};

export default TimeseriesMode;
