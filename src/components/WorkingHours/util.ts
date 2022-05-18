import _ from "underscore";

export type RangeType = {
  start: number,
  end: number,
}

export type CellType = {
  dayIndex: number,
  hour: boolean, //true,
  id: number, // 288,
  index: number, //0,
  selected: boolean, //false
  timeFrom: string, //"00:00"
  timeTo: string, //"00:30"
}

export type DayStateType = {
  timeCells: CellType[]
}

export type UserDataRange = {
  from: string,
  to: string
}

export type UserDayData = {
  key: string,
  name: string,
  ranges: UserDataRange[];
}

export function newDaysCopy(days: DayStateType[]): DayStateType[] {
  return days.map(d => ({
    timeCells: d.timeCells.map(c => Object.assign({}, c))
  }))
}

export function newTimeCellDefinition(d: number, i: number, ranges: UserDataRange[]): CellType {

  // from and to hours, half-hour flag
  const [hourFrom, hourTo, isHalf] = [
    Math.floor(i / 2),
    Math.ceil(i / 2),
    i % 2 === 1
  ];



  // from and to times as floating point
  const [f0, f1] = [
    hourFrom + (isHalf ? 0.5 : 0),
    hourTo + (isHalf ? 0 : 0.5)

  ];

  const timeFrom =  (hourFrom < 10 ? `0${hourFrom}` : hourFrom) + (isHalf ? ":30" : ":00");
  const timeTo = (hourTo < 10 ? `0${hourTo}` : hourTo) + (!isHalf ? ":30" : ":00");

  const selected = ranges.filter(item => (timeFrom >= item.from && timeTo <= item.to)).length > 0;

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
    timeTo: timeTo
  };

};


export function getWorkingHoursSelectedRanges(timeCells: CellType[]): RangeType[] {

  //console.log("Input", timeCells);
  // calculate selected ranges
  const ranges = _.chain(timeCells)
    .reduce((r, v, i) => {
      if (!v.selected) return r;
      if (
        r.length === 0 ||
        i !==
          _.chain(r)
            .last()
            .last()
            .value().index +
            1
      )
        r.push([{ value: v, index: i }]);
      else _.last(r).push({ value: v, index: i });
      return r;
    }, [])
    .map(e => ({ start: e[0].index, end: _.last(e).index }))
    .value();


  // enable range overlap from 24-0
  if (
    ranges.length > 0 &&
    _.last(ranges).end === timeCells.length - 1 &&
    ranges[0].start === 0
  ) {
    _.last(ranges).end = ranges[0].end;
    ranges.splice(0, 1);
  }
  //console.log("Output", ranges);

  return ranges;

}


