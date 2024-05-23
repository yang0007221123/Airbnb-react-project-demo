import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "@/store/modules/home/index"
import entryReducer from "@/store/modules/entry/index";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entry: entryReducer
  }
})

export default store;