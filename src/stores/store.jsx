import { configureStore } from "@reduxjs/toolkit";
import emplyeeReducer from '../features/Employees'
const store=configureStore(
    {reducer:{
        employees: emplyeeReducer

    }}
)