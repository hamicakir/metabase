import type { QueryMode } from "metabase-types/types/Visualization";

import { getDefaultDrills } from "../drill";
import PivotByCategoryDrill from "../drill/PivotByCategoryDrill";
import PivotByTimeDrill from "../drill/PivotByTimeDrill";

const GeoMode: QueryMode = {
  name: "geo",
  drills: () => [...getDefaultDrills(), PivotByCategoryDrill, PivotByTimeDrill],
};

export default GeoMode;
