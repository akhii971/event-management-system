import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    bookedTickets: [],
  },
  reducers: {
    bookTicket: (state, action) => {
      state.bookedTickets.push(action.payload);
    },
  },
});

export const { bookTicket } = ticketSlice.actions;
export default ticketSlice.reducer;
