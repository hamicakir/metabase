/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";
import { Motion, spring } from "react-motion";
import { t } from "ttag";

import NativeQuery from "metabase-lib/lib/queries/NativeQuery";
import StructuredQuery from "metabase-lib/lib/queries/StructuredQuery";

import DebouncedFrame from "metabase/components/DebouncedFrame";
import ExplicitSize from "metabase/components/ExplicitSize";
import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";
import Popover from "metabase/components/Popover";
import Subhead from "metabase/components/type/Subhead";

import AggregationPopover from "../AggregationPopover";
import BreakoutPopover from "../BreakoutPopover";
import NativeQueryEditor from "../NativeQueryEditor";
import QueryModals from "../QueryModals";
import QueryVisualization from "../QueryVisualization";
import SavedQuestionIntroModal from "../SavedQuestionIntroModal";
import DataReference from "../dataref/DataReference";
import SnippetSidebar from "../template_tags/SnippetSidebar";
import TagEditorSidebar from "../template_tags/TagEditorSidebar";
import NewQuestionHeader from "./NewQuestionHeader";
import QuestionDataSelector from "./QuestionDataSelector";
import QueryViewNotebook from "./View/QueryViewNotebook";
import ViewFooter from "./ViewFooter";
import { ViewTitleHeader, ViewSubHeader } from "./ViewHeader";
import ViewSidebar from "./ViewSidebar";
import ChartSettingsSidebar from "./sidebars/ChartSettingsSidebar";
import ChartTypeSidebar from "./sidebars/ChartTypeSidebar";
import FilterSidebar from "./sidebars/FilterSidebar";
import QuestionDetailsSidebar from "./sidebars/QuestionDetailsSidebar";
import SummarizeSidebar from "./sidebars/SummarizeSidebar/SummarizeSidebar";

const DEFAULT_POPOVER_STATE = {
  aggregationIndex: null,
  aggregationPopoverTarget: null,
  breakoutIndex: null,
  breakoutPopoverTarget: null,
};

@ExplicitSize()
export default class View extends React.Component {
  state = {
    ...DEFAULT_POPOVER_STATE,
  };

  handleAddSeries = e => {
    this.setState({
      ...DEFAULT_POPOVER_STATE,
      aggregationPopoverTarget: e.target,
    });
  };
  handleEditSeries = (e, index) => {
    this.setState({
      ...DEFAULT_POPOVER_STATE,
      aggregationPopoverTarget: e.target,
      aggregationIndex: index,
    });
  };
  handleRemoveSeries = (e, index) => {
    const { query } = this.props;
    query.removeAggregation(index).update(null, { run: true });
  };
  handleEditBreakout = (e, index) => {
    this.setState({
      ...DEFAULT_POPOVER_STATE,
      breakoutPopoverTarget: e.target,
      breakoutIndex: index,
    });
  };
  handleClosePopover = () => {
    this.setState({
      ...DEFAULT_POPOVER_STATE,
    });
  };

  render() {
    const {
      question,
      query,
      card,
      isDirty,
      isResultDirty,
      isLiveResizable,
      runQuestionQuery,
      databases,
      isShowingTemplateTagsEditor,
      isShowingDataReference,
      isShowingNewbModal,
      isShowingChartTypeSidebar,
      isShowingChartSettingsSidebar,
      isShowingSummarySidebar,
      isShowingFilterSidebar,
      isShowingSnippetSidebar,
      isShowingQuestionDetailsSidebar,
      queryBuilderMode,
      mode,
      fitClassNames,
      height,
      onOpenModal,
    } = this.props;
    const {
      aggregationIndex,
      aggregationPopoverTarget,
      breakoutIndex,
      breakoutPopoverTarget,
    } = this.state;

    // if we don't have a card at all or no databases then we are initializing, so keep it simple
    if (!card || !databases) {
      return <LoadingAndErrorWrapper className={fitClassNames} loading />;
    }
    const queryMode = mode && mode.queryMode();
    const ModeFooter = queryMode && queryMode.ModeFooter;
    const isStructured = query instanceof StructuredQuery;
    const isNative = query instanceof NativeQuery;

    const isNewQuestion =
      query instanceof StructuredQuery &&
      !query.sourceTableId() &&
      !query.sourceQuery();

    if (isNewQuestion && queryBuilderMode === "view") {
      return (
        <div className={fitClassNames}>
          <div className="p4 mx2">
            <QuestionDataSelector
              query={query}
              triggerElement={
                <Subhead className="mb2">{t`Pick your data`}</Subhead>
              }
            />
          </div>
        </div>
      );
    }

    const topQuery = isStructured && query.topLevelQuery();

    // only allow editing of series for structured queries
    const onAddSeries = topQuery ? this.handleAddSeries : null;
    const onEditSeries = topQuery ? this.handleEditSeries : null;
    const onRemoveSeries =
      topQuery && topQuery.hasAggregations() ? this.handleRemoveSeries : null;
    const onEditBreakout =
      topQuery && topQuery.hasBreakouts() ? this.handleEditBreakout : null;

    const leftSideBar = isShowingChartSettingsSidebar ? (
      <ChartSettingsSidebar
        {...this.props}
        onClose={this.props.onCloseChartSettings}
      />
    ) : isShowingChartTypeSidebar ? (
      <ChartTypeSidebar {...this.props} onClose={this.props.onCloseChartType} />
    ) : isShowingQuestionDetailsSidebar ? (
      <QuestionDetailsSidebar question={question} onOpenModal={onOpenModal} />
    ) : null;

    const rightSideBar =
      isStructured && isShowingSummarySidebar ? (
        <SummarizeSidebar
          question={question}
          onClose={this.props.onCloseSummary}
          isResultDirty={isResultDirty}
          runQuestionQuery={runQuestionQuery}
        />
      ) : isStructured && isShowingFilterSidebar ? (
        <FilterSidebar question={question} onClose={this.props.onCloseFilter} />
      ) : isNative && isShowingTemplateTagsEditor ? (
        <TagEditorSidebar
          {...this.props}
          onClose={this.props.toggleTemplateTagsEditor}
        />
      ) : isNative && isShowingDataReference ? (
        <DataReference
          {...this.props}
          onClose={this.props.toggleDataReference}
        />
      ) : isNative && isShowingSnippetSidebar ? (
        <SnippetSidebar
          {...this.props}
          onClose={this.props.toggleSnippetSidebar}
        />
      ) : null;

    const isSidebarOpen = leftSideBar || rightSideBar;

    const isNotebookContainerOpen =
      isNewQuestion || queryBuilderMode === "notebook";

    return (
      <div className={fitClassNames}>
        <div className={cx("QueryBuilder flex flex-column bg-white spread")}>
          <Motion
            defaultStyle={isNewQuestion ? { opacity: 0 } : { opacity: 1 }}
            style={
              isNewQuestion ? { opacity: spring(0) } : { opacity: spring(1) }
            }
          >
            {({ opacity }) => (
              <div className="flex-no-shrink z3 bg-white relative">
                <ViewTitleHeader
                  {...this.props}
                  style={{ opacity }}
                  py={1}
                  className="border-bottom"
                />
                {opacity < 1 && (
                  <NewQuestionHeader
                    className="spread"
                    style={{ opacity: 1 - opacity }}
                  />
                )}
              </div>
            )}
          </Motion>

          <div className="flex flex-full relative">
            {query instanceof StructuredQuery && (
              <QueryViewNotebook
                isNotebookContainerOpen={isNotebookContainerOpen}
                {...this.props}
              />
            )}

            <ViewSidebar side="left" isOpen={!!leftSideBar}>
              {leftSideBar}
            </ViewSidebar>

            <div
              className={cx("flex-full flex flex-column flex-basis-none", {
                "hide sm-show": isSidebarOpen,
              })}
            >
              {isNative && (
                <div className="z2 hide sm-show border-bottom mb2">
                  <NativeQueryEditor
                    {...this.props}
                    viewHeight={height}
                    isOpen={!card.dataset_query.native.query || isDirty}
                    datasetQuery={card && card.dataset_query}
                  />
                </div>
              )}

              <ViewSubHeader {...this.props} />

              <DebouncedFrame
                className="flex-full"
                style={{ flexGrow: 1 }}
                enabled={!isLiveResizable}
              >
                <QueryVisualization
                  {...this.props}
                  onAddSeries={onAddSeries}
                  onEditSeries={onEditSeries}
                  onRemoveSeries={onRemoveSeries}
                  onEditBreakout={onEditBreakout}
                  noHeader
                  className="spread"
                />
              </DebouncedFrame>

              {ModeFooter && (
                <ModeFooter {...this.props} className="flex-no-shrink" />
              )}

              <ViewFooter {...this.props} className="flex-no-shrink" />
            </div>

            <ViewSidebar side="right" isOpen={!!rightSideBar}>
              {rightSideBar}
            </ViewSidebar>
          </div>
        </div>

        {isShowingNewbModal && (
          <SavedQuestionIntroModal
            onClose={() => this.props.closeQbNewbModal()}
          />
        )}

        <QueryModals {...this.props} />

        {isStructured && (
          <Popover
            isOpen={!!aggregationPopoverTarget}
            target={aggregationPopoverTarget}
            onClose={this.handleClosePopover}
          >
            <AggregationPopover
              query={query}
              aggregation={
                aggregationIndex >= 0
                  ? query.aggregations()[aggregationIndex]
                  : 0
              }
              onChangeAggregation={aggregation => {
                if (aggregationIndex != null) {
                  query
                    .updateAggregation(aggregationIndex, aggregation)
                    .update(null, { run: true });
                } else {
                  query.aggregate(aggregation).update(null, { run: true });
                }
                this.handleClosePopover();
              }}
              onClose={this.handleClosePopover}
            />
          </Popover>
        )}
        {isStructured && (
          <Popover
            isOpen={!!breakoutPopoverTarget}
            onClose={this.handleClosePopover}
            target={breakoutPopoverTarget}
          >
            <BreakoutPopover
              query={query}
              breakout={
                breakoutIndex >= 0 ? query.breakouts()[breakoutIndex] : 0
              }
              onChangeBreakout={breakout => {
                if (breakoutIndex != null) {
                  query
                    .updateBreakout(breakoutIndex, breakout)
                    .update(null, { run: true });
                } else {
                  query.breakout(breakout).update(null, { run: true });
                }
                this.handleClosePopover();
              }}
              onClose={this.handleClosePopover}
            />
          </Popover>
        )}
      </div>
    );
  }
}
