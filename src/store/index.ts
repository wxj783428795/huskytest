/*
 * @Author: wxj
 * @Date: 2021-12-16 15:59:24
 * @LastEditTime: 2021-12-16 17:29:40
 * @LastEditors: wxj
 * @Description: redux 仓库
 * @FilePath: \XS_IndustryHighQuality.App\src\store\index.ts
 */
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './states/counterSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
