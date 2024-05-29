import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getGoodPrice, getHighScore} from "@/api/modules/homeService";

const homeReducer = createSlice({
  name: "home",
  initialState: {
    highScore: {},
    goodPriceInfo: {}  // 高性价比房源信息
  },
  // 同步reducers
  reducers: {
    setGoodPriceInfo(state, {payload}) {
      state.goodPriceInfo = payload;
    }
  },
  // 异步reducers
  extraReducers: (builder) => {
    // 获取高分房源信息
    builder.addCase(getHighScoreAction.fulfilled, (state, action) => {
      state.highScore = action.payload;
    }).addCase(getHighScoreAction.rejected, (state, action) => {
      console.log("getHighScoreAction请求失败");
    })
  }
})

export const {setGoodPriceInfo} = homeReducer.actions;
export default homeReducer.reducer;  // reducer

/*
    第1种方式：返回异步请求结果，extraReducers中对应的builder就可以接收到结果并保存；
*/
// 获取高分房源信息
export const getHighScoreAction = createAsyncThunk("home/getHighScore", async () => {
  return await getHighScore();
})

/*
    第2种方式：直接通过dispatch调用reducers中的方法保存数据；
    如果同一个组件中有多个异步接口调用，则可以将所有的接口请求都写在一个asyncThunk中，不需要分开同时书写多个；
    如果接口调用顺序有严格的要求，则可以使用await等待；
*/
// 获取高性价比房源信息
export const getGoodPriceInfoAction = createAsyncThunk("getData", (payload, {dispatch, getState}) => {
  getGoodPrice().then((res) => {
    // 数据预处理
    res.list.forEach((item, index) => {
      if (index % 2 === 0) {
        const url = item.picture_url;
        item.picture_url = [url, url, url];
      } else {
        const url = item.picture_url;
        item.picture_url = [url];
      }
    })
    dispatch(setGoodPriceInfo(res))
  })
  
  // 调用第2个接口
  // getHighScore().then((res) => {
  //   console.log(res);
  // })
})