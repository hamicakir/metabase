/* eslint-disable react/prop-types */
import cx from "classnames";
import React from "react";

import SidebarHeader from "../SidebarHeader";
import OperatorSelector from "../filters/OperatorSelector";

export default function FilterPopoverHeader({
  className,
  showFieldPicker,
  filter,
  onFilterChange,
  onBack,
  isSidebar,
}) {
  const dimension = filter.dimension();
  const field = dimension.field();
  const operator = filter.operatorName();

  const showOperatorSelector = !(field.isTime() || field.isDate());
  const showHeader = showFieldPicker || showOperatorSelector;
  const showOperatorSelectorOnOwnRow = isSidebar || !showFieldPicker;

  const setOperator = operatorName => {
    if (filter.operatorName() !== operatorName) {
      onFilterChange(filter.setOperator(operatorName));
    }
  };

  return showHeader ? (
    <div
      className={cx(className, "text-medium", {
        "flex align-center": !showOperatorSelectorOnOwnRow,
      })}
    >
      {showFieldPicker && (
        <SidebarHeader
          className={cx("text-default py1", {
            pr2: !showOperatorSelectorOnOwnRow,
          })}
          title={
            (field.table ? field.table.displayName() + " – " : "") +
            field.displayName()
          }
          onBack={onBack}
        />
      )}
      {showOperatorSelector && (
        <OperatorSelector
          className={cx("flex-no-shrink block", {
            "ml-auto": !showOperatorSelectorOnOwnRow,
            my1: showOperatorSelectorOnOwnRow,
          })}
          operator={operator}
          operators={filter.filterOperators(operator)}
          onOperatorChange={setOperator}
        />
      )}
    </div>
  ) : null;
}
