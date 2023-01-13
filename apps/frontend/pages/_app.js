import { useState } from "react";
import { BookingContext, initialBookingState } from "../context/BookingContext";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  const [bookingStatus, setBookingStatus] = useState(initialBookingState);

  return (
    <BookingContext.Provider value={{ bookingStatus, setBookingStatus }}>
      <Component {...pageProps} />
    </BookingContext.Provider>
  );
}
