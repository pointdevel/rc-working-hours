export type RangeType = {
  start: number;
  end: number;
};

export type CellType = {
  dayIndex: number;
  hour: boolean; //true,
  id: number; // 288,
  index: number; //0,
  selected: boolean; //false
  timeFrom: string; //"00:00"
  timeTo: string; //"00:30"
};

export type DayStateType = {
  timeCells: CellType[];
};

export type UserDataRange = {
  from: string;
  to: string;
};

export type UserDayData = {
  key: string;
  name: string;
  ranges: UserDataRange[];
};

export function newDaysCopy(days: DayStateType[]): DayStateType[] {
  return days.map((d) => ({
    timeCells: d.timeCells.map((c) => Object.assign({}, c)),
  }));
}

export function newTimeCellDefinition(d: number, i: number, ranges: UserDataRange[]): CellType {
  // from and to hours, half-hour flag
  const [hourFrom, hourTo, isHalf] = [Math.floor(i / 2), Math.ceil(i / 2), i % 2 === 1];

  // from and to times as floating point
  const [f0, f1] = [hourFrom + (isHalf ? 0.5 : 0), hourTo + (isHalf ? 0 : 0.5)];

  const timeFrom = (hourFrom < 10 ? `0${hourFrom}` : hourFrom) + (isHalf ? ':30' : ':00');
  const timeTo = (hourTo < 10 ? `0${hourTo}` : hourTo) + (!isHalf ? ':30' : ':00');

  const selected = ranges.filter((item) => timeFrom >= item.from && timeTo <= item.to).length > 0;

  return {
    // unique time cell id
    id: d * 48 + i,
    // day of the week (0-6)
    dayIndex: d,
    // time cell index in current day
    index: i,
    // initial selection state for cell
    selected: selected,
    // is this a full-hour or half-hour cell
    hour: !isHalf,
    // from time as string (hh:mm)
    timeFrom: timeFrom,
    // to time as string (hh:mm)
    timeTo: timeTo,
  };
}

export function getWorkingHoursSelectedRanges(timeCells: CellType[]): RangeType[] {
  const ranges = [];
  let start: Number | null = null;
  let open = false;
  let last: Number | null = null;

  timeCells.forEach((cell) => {
    if (cell.selected && !open) {
      open = true;
      start = cell.index;
    } else if (!cell.selected && open) {
      if (start !== null && last !== null) {
        ranges.push({ start: start, end: last });
      }
      start = null;
      open = false;
    }
    last = cell.index;
  });

  if (open && start !== null && last !== null) {
    ranges.push({ start: start, end: last });
  }

  return ranges;
}
