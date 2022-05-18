import React, {MouseEvent} from "react";
import './WorkingHours.css';

import WorkingHoursDay from "./components/working_hours_day";

import { getWorkingHoursSelectedRanges, newTimeCellDefinition, newDaysCopy, CellType, DayStateType, UserDayData } from "./util";


interface WorkingHoursProps {
  onChange?: (data: UserDayData[]) => void,
  data: UserDayData[],
}

interface WorkingHoursState {
  days: DayStateType[],
  isSelecting: boolean,
  selectionOldCellStates: DayStateType[],
  selectionState: boolean,
  selectionFromCell: CellType|null,
  previousUpdateSelectionToCell: CellType|null,
  references:any[]
}

class WorkingHours extends React.Component<WorkingHoursProps, WorkingHoursState> {

  constructor(props: WorkingHoursProps) {
    super(props);
    this.resetAll = this.resetAll.bind(this);
    this.startSelect = this.startSelect.bind(this);
    this.updateSelect = this.updateSelect.bind(this);

    this.mouseUp = this.mouseUp.bind(this);
    this.mouseMove = this.mouseMove.bind(this);

    const dayCells = 48;
    const gridCells = 48 * (this.props.data || []).length;

    const days = (this.props.data || []).map((day, d) => ({
      timeCells: [...Array(dayCells).keys()].map(i => newTimeCellDefinition(d, i, (this.props.data[d]?.ranges || [])))
    }));

    this.state = {
      days: days, // state model for this control and children

      isSelecting: false, // if there is an active selection
      selectionOldCellStates: [], // the state of all cells before the selection started
      selectionState: true, // set or clear selection state for the current selection range
      selectionFromCell: null, // the current selection started on this cell
      previousUpdateSelectionToCell: null, // avoid consecutive updates on same cell
      references: [...Array(gridCells).keys()].map(i => null)
    };

  }



  componentDidMount() {
    document.addEventListener("mouseup", this.mouseUp, false);
    document.addEventListener("mousemove", this.mouseMove, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mouseup", this.mouseUp, false);
    document.removeEventListener("mousemove",this.mouseMove,false);
  }


  mouseUp(e) {
    if (!this.state.isSelecting) return;

    this.endSelect();
    e.preventDefault();
  }


  mouseMove(e) {
    if (!this.state.isSelecting) return;

    this.updateSelect(e.clientX, e.clientY);
    e.preventDefault();
  }


  startSelect(cellContent: CellType, el: HTMLTableCellElement) {
    //console.log("start select", cellContent,el)

    const selectionOldCellStates = newDaysCopy(this.state.days);

    this.setState({
      isSelecting: true,
      selectionFromCell: cellContent,
      selectionState: !cellContent.selected,
      selectionOldCellStates: selectionOldCellStates

    }, () => {
      this.updateSelectInternal(cellContent);
    });

  }


  endSelect() {
    this.setState({isSelecting: false, selectionOldCellStates: [], previousUpdateSelectionToCell: null, selectionFromCell: null });

    const userData = (this.state.days || []).map((item, i) => {
        const ranges = getWorkingHoursSelectedRanges(item.timeCells);

        const rangeStr = ranges.map(r => ({
            from: item.timeCells[r.start].timeFrom,
            to: item.timeCells[r.end].timeTo
        }));

        return { 
            key: this.props.data[i].key,
            name: this.props.data[i].name,
            ranges: rangeStr
        }
    });

    if (this.props.onChange) {
      this.props.onChange(userData);
    }
  }



  // update time cell selection (get state for time cell closest to x-coordinate)

  updateSelect(x, y) {
    //console.log("updateSelect", x,y);

    //for (let d = 0; d < this.state.days.length; d += 1) {
    for (let d = 0; d < this.state.days.length; d += 1) {
      for (let i = 0; i < this.state.days[d].timeCells.length; i += 1) {
        const flattenId = i + (d*this.state.days[d].timeCells.length);
        
        const rc = this.state.references[flattenId];

        if (
          (y >= rc.y && y < rc.y + rc.height) ||
          (d === 0 && y < rc.y) ||
          (d === this.state.days.length - 1 && y > rc.y + rc.height - 1)
        ) {

          if (
            (x >= rc.x && x < rc.x + rc.width) ||
            (i === 0 && x < rc.x) ||
            (i === this.state.days[d].timeCells.length - 1 &&
              x > rc.x + rc.width - 1)

          ) {
            this.updateSelectInternal(this.state.days[d].timeCells[i]);
            break;
          }

        }

      }

    }

  }



  // update time cell selection (from touch event)
  updateSelectTouch(e) {
    this.updateSelect(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  }



  // update time cell selection based on start and end elements (state)
  updateSelectInternal(state: CellType) {

    if (this.state.selectionFromCell === null) return;

    if (state === this.state.previousUpdateSelectionToCell) return;

    const [fromCell, toCell] = [this.state.selectionFromCell, state];

    let [fromY, toY, fromX, toX] = [
      fromCell.dayIndex,
      toCell.dayIndex,
      fromCell.index,
      toCell.index
    ];

    // swap from and to, if from > to
    if (fromY > toY) [fromY, toY] = [toY, fromY];
    if (fromX > toX) [fromX, toX] = [toX, fromX];


    // set selection status for all time cells
    // current selection is set based on the state of the start element
    // time cells not in current selection are reset to cached state
    const newState = {
      days: newDaysCopy(this.state.days),
      previousUpdateSelectionToCell: state
    };

    for (let d = 0; d < this.state.days.length; d += 1) {
      for (let i = 0; i < this.state.days[d].timeCells.length; i += 1) {
        const oldState = this.state.selectionOldCellStates[d].timeCells[i];

        if (d >= fromY && d <= toY && i >= fromX && i <= toX) {
          newState.days[d].timeCells[i].selected = this.state.selectionState;
        } else {
          newState.days[d].timeCells[i].selected = oldState.selected;
        }
      }

    }

    this.setState(newState);
  }



  // reset working hours for every day of the week
  resetAll(e) {
    const newState = {
      days: newDaysCopy(this.state.days)
    };

    for (let d = 0; d < this.state.days.length; d += 1) {
      for (let i = 0; i < this.state.days[d].timeCells.length; i += 1) {
        newState.days[d].timeCells[i].selected = false;
      }
    }

    this.setState(newState);
    e.preventDefault();

  }


  updateReference = (day: number,ref: any) => {
    if (ref && !this.state.references[day]) {
      this.state.references[day] = ref.getBoundingClientRect();
    }
  }

  render() {

    // render headers
    const timeHeaders = [...Array(24).keys()].map(i => 
      <td key={i} className="header" colSpan={2}>
        <span>{i < 10 ? `0${i}` : i}</span>
      </td>
    );


    return (

      <div>
        <table className="working-hours">
          <thead>
            <tr className="hours">
              <td />
              {timeHeaders}
            </tr>
          </thead>

          <tbody>
            {(this.props.data || []).map((day, d) => (
              <WorkingHoursDay key={day.key}
                name={day.name}
                index={d}
                timeCells={this.state.days[d].timeCells}
                startSelect={this.startSelect}
                updateReference={this.updateReference}
              />
            ))}
            <tr>
              <td className="reset-all" colSpan="49">
                <button
                  className="btn btn-primary btn-xs working-hours-reset"
                  onClick={this.resetAll}
                >
                  Reset All
                </button>
              </td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}


export default WorkingHours;


