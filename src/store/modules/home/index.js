import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGoodPrice, getHighScore} from "@/api/modules/homeService";

const homeReducer = createSlice({
  name: "home",
  initialState: {
    highScore: {},
    goodPriceInfo: {}  // 高性价比房源信息
  },
  // 同步reducers
  reducers: {},
  // 异步reducers
  extraReducers: (builder) => {
    // 获取高分房源信息
    builder.addCase(getHighScoreAction.fulfilled, (state, action) => {
      state.highScore = action.payload;
    }).addCase(getHighScoreAction.rejected, (state, action) => {
      console.log("getHighScoreAction请求失败");
    })
    
    // 获取高性价比房源信息
    builder.addCase(getGoodPriceInfoAction.fulfilled, (state, action) => {
      action.payload.list.forEach((item, index) => {
        if(index % 2 === 0){
          const url  = item.picture_url;
          item.picture_url = [url, url, url];
        }else{
          const url  = item.picture_url;
          item.picture_url = [url];
        }
      })
      state.goodPriceInfo = action.payload;
    }).addCase(getGoodPriceInfoAction.rejected, (state, action) => {
      console.log("getGoodPriceInfoAction请求失败");
    })
  }
})

// export const {} = homeReducer.actions;  // 同步的dispatch
export default homeReducer.reducer;  // reducer

// 获取高分房源信息
export const getHighScoreAction = createAsyncThunk("home/getHighScore", async () => {
  return await getHighScore();
})

// 获取高性价比房源信息
export const getGoodPriceInfoAction = createAsyncThunk("home/getGoodPriceInfo", async () => {
  return await getGoodPrice();
})