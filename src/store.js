import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
  count :44
}

const AppReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('hi')
      return {...state,count :state.count + 1}
    case 'DECREMENT':
      return {...state,count :state.count - 1}
    default:
      return state
  }
}

export default createStore(
  combineReducers({
    app: AppReducer
  }),
  applyMiddleware(
    ReduxThunk
  )
)
