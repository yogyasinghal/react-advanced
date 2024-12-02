
import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"

export interface Person {
    name: string;
}

interface PersonState {
    persons: Array<Person>;
}

const initialState: PersonState = {
    persons:[]
};

export const fetchPeople = createAsyncThunk(
  "people/fetch",
  async (thunkAPI) => {
    const response = await fetch("http://localhost:3000/api/people", {
      method: "GET",
    });
    const data = response.json();
    return data;
  },
);
export const savePerson = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    const response = await fetch("http://localhost:3000/api/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const data = await response.json();
    return data;
  },
);

// pending
// fulfiled
// rejected
  
export const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
      addPerson: (state, action: PayloadAction<{ name: string }>) => {
        state.persons.push({
          name: action.payload.name,
        });
      },
    },
    extraReducers(builder) {
        builder.addCase(fetchPeople.fulfilled,(state,action)=>{
          const arr=action.payload.map((name:string)=>{
            return {name}
          });
          state.persons = arr;
        })
        builder.addCase(savePerson.fulfilled, (state, action) => {
          state.persons.push(action.payload);
        });
    },
})  

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;

  