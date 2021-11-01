import type { QueryMode } from "metabase-types/types/Visualization";

import { getDefaultDrills } from "../drill";
import PivotByCategoryDrill from "../drill/PivotByCategoryDrill";
import PivotByLocationDrill from "../drill/PivotByLocationDrill";
import PivotByTimeDrill from "../drill/PivotByTimeDrill";

const MetricMode: QueryMode = {
  name: "metric",
  drills: () => [
    ...getDefaultDrills(),
    PivotByCategoryDrill,
    PivotByLocationDrill,
    PivotByTimeDrill,
  ],
};

export default MetricMode;
