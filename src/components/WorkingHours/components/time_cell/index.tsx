import React from 'react';
import { CellType } from '../../util';

interface TimeCellProps {
  state: CellType;
  startSelect: (state: CellType, e: EventTarget) => void;
  updateReference: any;
}

const TimeCell = (props: TimeCellProps) => {
  const mouseDown = (e) => props.startSelect(props.state, e.target);
  const updateReference = (el) => props.updateReference(props.state.id, el);
  const { state } = props;

  const [di, tf, s, h] = [
    state.dayIndex,
    state.timeFrom.replace(':', '-'),
    state.selected ? ' selected' : '',
    state.hour ? ' hour' : ' half',
  ];

  const classNames = `time-cell time-cell-${di}-${tf}${s}${h}`;

  return <td ref={updateReference} className={classNames} onMouseDown={mouseDown} />;
};

function selectedPropsAreEqual(prev: TimeCellProps, next: TimeCellProps) {
  return prev.state.selected === next.state.selected && prev.state.id === next.state.id;
}

const MemoizedTimeCell = React.memo(TimeCell, selectedPropsAreEqual);
export default MemoizedTimeCell;
