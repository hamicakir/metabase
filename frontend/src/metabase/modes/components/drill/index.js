import AutomaticDashboardDrill from "./AutomaticDashboardDrill";
import ColumnFilterDrill from "./ColumnFilterDrill";
import CompareToRestDrill from "./CompareToRestDrill";
import DashboardClickDrill from "./DashboardClickDrill";
import FormatAction from "./FormatAction";
import ObjectDetailDrill from "./ObjectDetailDrill";
import QuickFilterDrill from "./QuickFilterDrill";
import SortAction from "./SortAction";
import UnderlyingRecordsDrill from "./UnderlyingRecordsDrill";
import ZoomDrill from "./ZoomDrill";

export const getDefaultDrills = () => [
  ZoomDrill,
  SortAction,
  ObjectDetailDrill,
  QuickFilterDrill,
  ColumnFilterDrill,
  UnderlyingRecordsDrill,
  AutomaticDashboardDrill,
  CompareToRestDrill,
  FormatAction,
  DashboardClickDrill,
];
