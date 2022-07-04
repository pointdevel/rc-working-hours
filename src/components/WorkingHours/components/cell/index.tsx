import React from 'react';
import { CellType } from '../../util';

interface TimeCellProps {
  state: CellType;
  startSelect: (state: CellType) => void;
  updateReference: (id: number, el: HTMLTableCellElement | null) => void;
}

function TimeCell(props: TimeCellProps) {
  const { state, startSelect, updateReference } = props;

  const mouseDown = () => startSelect(state);
  const updateReference2 = (el: HTMLTableCellElement | null) => updateReference(state.id, el);

  const [di, tf, s, h] = [
    state.dayIndex,
    state.timeFrom.replace(':', '-'),
    state.selected ? ' selected' : '',
    state.hour ? ' hour' : ' half',
  ];

  const classNames = `time-cell time-cell-${di}-${tf}${s}${h}`;

  return <td ref={updateReference2} className={classNames} onMouseDown={mouseDown} />;
}

function selectedPropsAreEqual(prev: TimeCellProps, next: TimeCellProps) {
  return prev.state.selected === next.state.selected && prev.state.id === next.state.id;
}

const MemoizedTimeCell = React.memo(TimeCell, selectedPropsAreEqual);
export default MemoizedTimeCell;
