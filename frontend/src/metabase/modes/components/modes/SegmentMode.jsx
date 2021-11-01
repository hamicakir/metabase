import type { QueryMode } from "metabase-types/types/Visualization";

import { getDefaultDrills } from "../drill";
import DistributionDrill from "../drill/DistributionDrill";
import SummarizeColumnByTimeDrill from "../drill/SummarizeColumnByTimeDrill";
import SummarizeColumnDrill from "../drill/SummarizeColumnDrill";

const SegmentMode: QueryMode = {
  name: "segment",
  drills: () => [
    ...getDefaultDrills(),
    SummarizeColumnDrill,
    SummarizeColumnByTimeDrill,
    DistributionDrill,
  ],
};

export default SegmentMode;
