/**
 * @description: Actions
 */
import {CHANGE_COUNT} from "@/store/modules/entry/constant";


// dispatch使用示例
export const changeCountAction = (count) => {
  return {type: CHANGE_COUNT, count: count}
}