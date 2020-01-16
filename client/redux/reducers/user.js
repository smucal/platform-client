/* eslint-disable max-len */
const initialState = {
  name: 'Jonathan Chow',
  enrolled: '2019:1', // year:sem
  course: 'Computer Science',
  uid: null, // User ID - only when loggedin
  sid: null, // Session ID - only when loggedin
  modules: [
    {
      index: 'CS 101',
      sem: '2019:1',
      time_id: 1, // 0-indexed position of time object in array
      // time_index returns null if it is planned only for course planning (random number will be assigned when selected)
      // deselection of course with time_index will come with a pop-up that it will be erased from calendar as well
      grade: null, //  default null - grade 1 for A+ to 12 for F (follow table below)
      bid: 0, // default median of last batch - show bid min and median
    },
  ]
}

/* eslint-disable no-case-declarations */
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
