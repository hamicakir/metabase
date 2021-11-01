import type { QueryMode } from "metabase-types/types/Visualization";

import ObjectDetailDrill from "../drill/ObjectDetailDrill";

const ObjectMode: QueryMode = {
  name: "object",
  drills: () => [ObjectDetailDrill],
};

export default ObjectMode;
