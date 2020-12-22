import { setSearchField } from './actions'
import { apiCall } from './api/api'
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

import * as actions from './actions';

// export const setSearchField = (text) => ({ type: CHANGE_SEARCH_FIELD, payload: text })
//
// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING })
//   apiCall('https://jsonplaceholder.typicode.com/users')
//     .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
// }

it('should create an action to search robots', () => {
  const text = 'wooo';
  const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
              payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})

// it('handles requesting robots API', () => {
//   const expectedAction = {
//     type: REQUEST_ROBOTS_PENDING,
//   }
//   expect(actions.requestRobots()).toEqual(expectedAction)
// })