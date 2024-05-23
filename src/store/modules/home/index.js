import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getHighScore} from "@/api/modules/homeService";

const homeReducer = createSlice({
  name: "home",
  initialState: {
    highScore: {}
  },
  // 同步reducers
  reducers: {},
  // 异步reducers
  extraReducers: (builder) => {
    // 获取高分信息
    builder.addCase(getHighScoreAction.fulfilled, (state, action) => {
      state.highScore = action.payload;
    }).addCase(getHighScoreAction.rejected, (state, action) => {
      console.log("getHighScoreAction请求失败");
    })
  }
})

// export const {} = homeReducer.actions;  // 同步的dispatch
export default homeReducer.reducer;  // reducer

// 获取高分信息
export const getHighScoreAction = createAsyncThunk("home/getHighScore", async () => {
  return await getHighScore();
})