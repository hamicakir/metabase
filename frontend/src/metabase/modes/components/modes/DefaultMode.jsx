import type { QueryMode } from "metabase-types/types/Visualization";

import { getDefaultDrills } from "../drill";

const DefaultMode: QueryMode = {
  name: "default",
  drills: getDefaultDrills,
};

export default DefaultMode;
