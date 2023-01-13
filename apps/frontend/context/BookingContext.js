import { createContext } from "react";
import { DatePickerDefaultRange } from "../components/DatePicker";

export const initialBookingState = {
  dateRange: DatePickerDefaultRange,
};

export const BookingContext = createContext();
