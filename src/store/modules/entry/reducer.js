import {CHANGE_COUNT} from "@/store/modules/entry/constant";

const initState = {
  count: 999
}

function reducer(state = initState, action) {
  switch (action.type) {
    case CHANGE_COUNT:
      return {...state, count: action.count}
    default:
      return state
  }
}

export default reducer;