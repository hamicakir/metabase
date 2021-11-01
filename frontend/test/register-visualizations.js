import "metabase/plugins/builtin";
import registerVisualizations from "metabase/visualizations/register";

// We need to mock this *before* registering the visualizations. Otherwise
// `ChartWithLegend` with already load the real one.
jest.mock("metabase/components/ExplicitSize");

registerVisualizations();
