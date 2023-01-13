import React, { useContext } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { BookingContext } from "../context/BookingContext";

export const DatePickerDefaultRange = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const DatePicker = () => {
  const { bookingStatus, setBookingStatus } = useContext(BookingContext);

  return (
    <div>
      <div className="flex justify-around">
        <p className="text-xs text-[#F3971F]">pick-up</p>
        <p className="text-xs text-[#F3971F]">drop-off</p>
      </div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setBookingStatus({...bookingStatus, dateRange: [item.selection]})}
        moveRangeOnFirstSelection={false}
        ranges={bookingStatus.dateRange}
        rangeColors={["#F3971F"]}
        color={"white"}
        showMonthArrow={false}
        className="sm:mx-auto rdrDateDisplay rdrCalendarWrapper rdrDateDisplayWrapper [rdrDayNumber span] rdrWeekDay [rdrMonthAndYearPickers select] [rdrDateDisplayItem input] rdrDateDisplay"
      />
    </div>
  );
};

export default DatePicker;
