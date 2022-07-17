import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/Employees";

export const store=configureStore({
    reducer:{
        employees:employeeReducer

    }
})

