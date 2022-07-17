import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

//fetchData

export const fetchEmployees=createAsyncThunk(`employees/fetchEmployees`,async (_,{dataValue})=>{
    const response=await axios.get('http://localhost:8000/Employee')
    try{
        return response.data
} 
  catch(error){
    if(!response.error){
        return dataValue(error)
    }
    return dataValue(error.response.data)
} 
});
export const deleteEmployee=createAsyncThunk('employee/deleteEmployee',async (id,{dataValue})=>{
    try{
        const response=await axios.delete(`http://localhost:8000/Employee/${id}`)
        return response.data

    }catch(error){
        if(!error.response){
            return dataValue(error)
        }
        return dataValue(error.response.data)
    }
})



//creating employee
export const createEmployees=createAsyncThunk(`employees/createEmployees`,async(data,{dataValue})=>{
        try{
            const response= await axios.post('http://localhost:8000/Employee',data)
            return response.data

        }catch(error){
            if(!error.response){
                return dataValue(error)
            }
            return dataValue(error.response.data)
        }
    } )


//     //updating employee
//     export const updateEmployees=createAsyncThunk(`${namespace}/updateEmployees`,async(data,{dataValue})=>{
//     try{
//         let id=data.id
//         let newData={
//             name:data.name,
//             role:data.role

//         }
//         const response=await axios.patch(`${url}/${id}`,newData)
//         return response.data
//     }catch(error){
//         if(!error.response){
//             return dataValue(error)
//         }
//         return  dataValue(error.response.data)

//     }
//     })






    export const employeeSlice=createSlice(
       { name:'employees',
        initialState:{
            employees: [],
            isLoading: false,
            createMessage:null,
            deleteMessage:null,
            error:null,
        },
        // reducers:{},


        extraReducers:{
            //retrieving
            [fetchEmployees.pending]:(state)=>{
                state.status='loading'
            },
            [fetchEmployees.fulfilled]:(state,{payload})=>{
                state.status='success'
                state.employees=payload
            },
            [fetchEmployees.rejected]:(state,{payload})=>{
                state.status='failed'
                state.error=payload.error||payload.toString()
            },
            //creating employee
            [createEmployees.pending]: (state) => {
                state.status = 'loading'
              },
              [createEmployees.fulfilled]: (state, { payload }) => {
                state.status = 'success'
                state.createMessage = payload.message
              },
          
              [createEmployees.rejected]: (state, { payload }) => {
                state.status = 'failed'
                state.error = payload.error || payload.toString()
              },
              [deleteEmployee.pending]:state=>{
                state.status='loading'
                

              },
              [deleteEmployee.fulfilled]:(state,{payload})=>{
                state.state='success'
                state.value=payload
              },
              [deleteEmployee.rejected]:(state,{payload})=>{
                state.deleteMessage=payload.message 
                state.status='success'
              }

           
        }
    }
    )

    export const employeeSelector=(state)=>state.employees
    
    export default employeeSlice.reducer