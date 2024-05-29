import {configureStore} from "@reduxjs/toolkit";
import homeReducer from "@/store/modules/home/index"
import entryReducer from "@/store/modules/entry/index";
import globalReducer from "@/store/modules/global/index";

const store = configureStore({
  reducer: {
    home: homeReducer,
    entry: entryReducer,
    global: globalReducer
  }
})

export default store;