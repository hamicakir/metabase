import { assocIn } from "icepick";
import React, { Component } from "react";

import type { VisualizationProps } from "metabase-types/types/Visualization";

import { getComputedSettingsForSeries } from "metabase/visualizations/lib/settings/visualization";
import BarChart from "metabase/visualizations/visualizations/BarChart";

export default class FunnelBar extends Component {
  props: VisualizationProps;

  render() {
    return (
      <BarChart
        {...this.props}
        isScalarSeries={true}
        settings={{
          ...this.props.settings,
          ...getComputedSettingsForSeries(
            assocIn(this.props.series, [0, "card", "display"], "bar"),
          ),
          "bar.scalar_series": true,
        }}
      />
    );
  }
}
