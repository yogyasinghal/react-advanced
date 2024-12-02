

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CartSlice } from "./features/cart/cartSlice";
import {PersonSlice} from "./features/people/peopleSlice";

export const store = configureStore({
    reducer:{
        persons:PersonSlice.reducer,
        cart: CartSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;