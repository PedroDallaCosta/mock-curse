import { configureStore } from "@reduxjs/toolkit";
import modulesSlice from '@/store/modulesSlice'

export const store = configureStore({
  reducer: {
    modules: modulesSlice
  }
})