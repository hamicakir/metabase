import {
  registerVisualization,
  setDefaultVisualization,
} from "metabase/visualizations";

import AreaChart from "./visualizations/AreaChart";
import BarChart from "./visualizations/BarChart";
import ComboChart from "./visualizations/ComboChart";
import Funnel from "./visualizations/Funnel";
import Gauge from "./visualizations/Gauge";
import LineChart from "./visualizations/LineChart";
import MapViz from "./visualizations/Map";
import ObjectDetail from "./visualizations/ObjectDetail";
import PieChart from "./visualizations/PieChart";
import PivotTable from "./visualizations/PivotTable";
import Progress from "./visualizations/Progress";
import RowChart from "./visualizations/RowChart";
import Scalar from "./visualizations/Scalar";
import ScatterPlot from "./visualizations/ScatterPlot";
import SmartScalar from "./visualizations/SmartScalar";
import Table from "./visualizations/Table";
import Text from "./visualizations/Text";
import WaterfallChart from "./visualizations/WaterfallChart";

export default function () {
  registerVisualization(Scalar);
  registerVisualization(SmartScalar);
  registerVisualization(Progress);
  registerVisualization(Gauge);
  registerVisualization(Table);
  registerVisualization(Text);
  registerVisualization(LineChart);
  registerVisualization(AreaChart);
  registerVisualization(BarChart);
  registerVisualization(WaterfallChart);
  registerVisualization(ComboChart);
  registerVisualization(RowChart);
  registerVisualization(ScatterPlot);
  registerVisualization(PieChart);
  registerVisualization(MapViz);
  registerVisualization(Funnel);
  registerVisualization(ObjectDetail);
  registerVisualization(PivotTable);
  setDefaultVisualization(Table);
}
