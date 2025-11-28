import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./ticketSlice";
import loginReducer from "./Loginslice"; 


const store = configureStore({
  reducer: {
    tickets: ticketReducer,
    login: loginReducer, 
  },
});

export default store;

