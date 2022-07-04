import React from 'react';

import TimeCell from '../cell';

import { getWorkingHoursSelectedRanges, CellType } from '../../util';

interface WorkingHoursDayProps {
  name: string;
  timeCells: CellType[];
  index: number;
  startSelect: (state: CellType) => void;
  updateReference: (id: number, el: HTMLTableCellElement | null) => void;
}

function TimeCellElements(props: WorkingHoursDayProps) {
  const { timeCells, updateReference, startSelect } = props;
  return (
    <>
      {[...Array(48).keys()].map((i) => (
        <TimeCell
          key={`timeCell-${timeCells[i].id}`}
          updateReference={updateReference}
          state={timeCells[i]}
          startSelect={startSelect}
        />
      ))}
    </>
  );
}

function moviePropsAreEqual(prev: WorkingHoursDayProps, next: WorkingHoursDayProps) {
  return prev.name === next.name && JSON.stringify(prev.timeCells) === JSON.stringify(next.timeCells);
}

const MemoizedTimeCellElements = React.memo(TimeCellElements, moviePropsAreEqual);

const WorkingHoursDay = (props: WorkingHoursDayProps) => {
  //console.log("WorkingHoursDay", props.name);
  const timeCells = props.timeCells;

  // calculate selected ranges
  const ranges = getWorkingHoursSelectedRanges(timeCells);

  const rangeStr = ranges
    .map((r) => {
      const tmp = [timeCells[r.start].timeFrom, timeCells[r.end].timeTo]; //.replace(/:00$/, '')
      return tmp.join('-');
    })
    .join(', ');

  return (
    <tr className="day">
      <td className="day-name">
        {rangeStr.length > 0 && (
          <div className="timespan-container">
            <div className="timespan-overlay">
              <span className="timespan">{rangeStr}</span>
            </div>
          </div>
        )}
        {props.name}
      </td>

      <MemoizedTimeCellElements {...props} />
    </tr>
  );
};

const MemoizedWorkingHoursDay = React.memo(WorkingHoursDay, moviePropsAreEqual);

export default MemoizedWorkingHoursDay;
