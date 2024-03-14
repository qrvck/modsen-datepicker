import React, { Component, ComponentType } from 'react';

import { ContextData } from '@/providers/DataProvider';
import { checkAreDaysEqual, checkIsDayFromMonth } from '@/utils/check/checkDay';
import { IDay } from '@/utils/create/createDay';

import { IRootProps } from '../Root';

function withRangeSelect<T extends IRootProps>(PassedComponent: ComponentType<T>) {
  return class WithRangeSelect extends Component<T> {
    static contextType = ContextData;
    declare context: React.ContextType<typeof ContextData>;

    getClassNameForDay = (prevClassName: string | undefined, day: IDay) => {
      const { startDay, endDay, mouseOverEndDay } = this.context.rangleSelect;
      const className = [];

      if (prevClassName) className.push(prevClassName);
      if ((startDay && endDay) || (!startDay && !endDay)) className.push('selectable');

      if (
        startDay &&
        !endDay &&
        mouseOverEndDay &&
        startDay.timestamp > mouseOverEndDay.timestamp &&
        !checkAreDaysEqual(day, startDay)
      ) {
        className.push('selectable');

        return className.join(' ');
      }

      if (
        startDay &&
        mouseOverEndDay &&
        day.timestamp > startDay.timestamp &&
        day.timestamp < mouseOverEndDay.timestamp
      ) {
        className.push('between');

        return className.join(' ');
      }

      if (
        startDay &&
        endDay &&
        day.timestamp > startDay.timestamp &&
        day.timestamp < endDay.timestamp
      ) {
        className.push('between');

        return className.join(' ');
      }

      if (startDay && checkAreDaysEqual(day, startDay)) {
        className.push('start-selected');
      } else if (endDay && checkAreDaysEqual(day, endDay)) {
        className.push('end-selected');
      } else if (day === mouseOverEndDay) {
        className.push('end-hover');
      }

      return className.join(' ');
    };

    getOnClickWithoutSelect = (day: IDay, prevOnClick: (() => void) | undefined) => {
      const {
        rangleSelect: { changeStartDay },
      } = this.context;

      if (prevOnClick) {
        return () => {
          prevOnClick();
          changeStartDay(day);
        };
      } else {
        return () => {
          changeStartDay(day);
        };
      }
    };

    getOnClickWithStartSelect = (day: IDay, prevOnClick: (() => void) | undefined) => {
      const {
        rangleSelect: {
          startDay,
          endDay,
          mouseOverEndDay,
          changeStartDay,
          changeEndDay,
          changeMouseOverEndDay,
        },

        params: { changeIsOpenCalendar },
      } = this.context;

      if (startDay && !endDay) {
        if (mouseOverEndDay && startDay.timestamp < mouseOverEndDay.timestamp) {
          if (prevOnClick) {
            return () => {
              prevOnClick();
              changeEndDay(day);
              changeMouseOverEndDay(null);
              changeIsOpenCalendar(false);
            };
          } else {
            return () => {
              changeEndDay(day);
              changeMouseOverEndDay(null);
              changeIsOpenCalendar(false);
            };
          }
        } else if (mouseOverEndDay && startDay.timestamp > mouseOverEndDay.timestamp) {
          if (prevOnClick) {
            return () => {
              prevOnClick();
              changeStartDay(day);
              changeMouseOverEndDay(null);
            };
          } else {
            return () => {
              changeStartDay(day);
              changeMouseOverEndDay(null);
            };
          }
        }
      }
    };

    getOnClickWithStartEndSelect = (day: IDay, prevOnClick: (() => void) | undefined) => {
      const {
        rangleSelect: { startDay, endDay, changeStartDay, changeEndDay },
      } = this.context;

      if (startDay && endDay) {
        if (prevOnClick) {
          return () => {
            prevOnClick();
            changeStartDay(day);
            changeEndDay(null);
          };
        } else {
          return () => {
            changeStartDay(day);
            changeEndDay(null);
          };
        }
      }
    };

    getOnClickForDay = (day: IDay, prevOnClick: (() => void) | undefined) => {
      const {
        rangleSelect: { startDay, endDay },
      } = this.context;

      const { getOnClickWithoutSelect, getOnClickWithStartSelect, getOnClickWithStartEndSelect } =
        this;

      if (!startDay && !endDay) {
        return getOnClickWithoutSelect(day, prevOnClick);
      } else if (startDay && !endDay) {
        return getOnClickWithStartSelect(day, prevOnClick);
      } else if (startDay && endDay) {
        return getOnClickWithStartEndSelect(day, prevOnClick);
      }
    };

    getOnMouseOverForDay = (day: IDay, prevOnMouseOver: (() => void) | undefined) => {
      const { startDay, endDay, changeMouseOverEndDay } = this.context.rangleSelect;

      if (startDay && !endDay) {
        if (prevOnMouseOver) {
          return () => {
            prevOnMouseOver();
            changeMouseOverEndDay(day);
          };
        } else {
          return () => {
            changeMouseOverEndDay(day);
          };
        }
      } else {
        if (prevOnMouseOver) {
          return prevOnMouseOver;
        }
      }
    };

    getOnMouseOutForDay = (day: IDay, prevOnMouseOut: (() => void) | undefined) => {
      const {
        rangleSelect: { mouseOverEndDay, changeMouseOverEndDay },
      } = this.context;

      if (mouseOverEndDay) {
        if (prevOnMouseOut) {
          return () => {
            prevOnMouseOut();
            changeMouseOverEndDay(null);
          };
        } else {
          return () => {
            changeMouseOverEndDay(null);
          };
        }
      }
    };

    getProps = () => {
      const { day, className, onClick, onMouseOver, onMouseOut } = this.props;
      const { displayedMonthIndex } = this.context.params;
      const isFromMonth = checkIsDayFromMonth(day, displayedMonthIndex);
      const { getOnClickForDay, getClassNameForDay, getOnMouseOverForDay, getOnMouseOutForDay } =
        this;

      const newClassName = isFromMonth ? getClassNameForDay(className, day) : className;
      const newOnClick = isFromMonth ? getOnClickForDay(day, onClick) : onClick;
      const newOnMouseOver = isFromMonth ? getOnMouseOverForDay(day, onMouseOver) : onMouseOver;
      const newOnMouseOut = isFromMonth ? getOnMouseOutForDay(day, onMouseOver) : onMouseOut;

      return {
        className: newClassName,
        onClick: newOnClick,
        onMouseOver: newOnMouseOver,
        onMouseOut: newOnMouseOut,
      };
    };

    render() {
      const { getProps } = this;

      return <PassedComponent {...this.props} {...getProps()} />;
    }
  };
}

export { withRangeSelect };
