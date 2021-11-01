import { DropTarget } from "react-dnd";

import { PinnableDragTypes } from ".";
import DropArea from "./DropArea";

const PinDropTarget = DropTarget(
  PinnableDragTypes,
  {
    drop(props, monitor, component) {
      if (!props.noDrop) {
        return { pinIndex: props.pinIndex };
      }
    },
    canDrop(props, monitor) {
      const { item } = monitor.getItem();
      // NOTE: not necessary to check collection permission here since we
      // enforce it when beginning to drag and item within the same collection
      return props.pinIndex !== item.collection_position;
    },
  },
  (connect, monitor) => ({
    highlighted: monitor.canDrop(),
    hovered: monitor.isOver() && monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
  }),
)(DropArea);

export default PinDropTarget;
