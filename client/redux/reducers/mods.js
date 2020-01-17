const initialState = {
  modules: [
    {
      name: 'Programming Fundamentals',
      index: 'CS 101',
      description: 'Do pariatur ea veniam qui.<br/>Do pariatur ea veniam qui.', // check for <br/> (new-line character)
      prerequisites: [], // array of strings with module indexes
      preclusions: [], // array of strings with module indexes
      classes: [
        {
          sem: '2019:1', // year:sem
          exam: '2013-02-08 09:30:26', // use momentJS to parse string
          times: [
            {
              id: 0,
              day: 2, // 0 to 6 (Mon - 0 to Sunday - 6)
              instructor: 'Yeow Leong',
              instructor_url: 'https://smumods.com/professor/lee-yeow-leong/',
              location: 'SIS SR B1-1',
              from: '09:30', // hour:min
              to: '10:30', // bigger than 'from'
            },
            {
              id: 1,
              day: 3, // 0 to 6 (Mon - 0 to Sunday - 6)
              instructor: 'Yeow Leong',
              instructor_url: 'https://smumods.com/professor/lee-yeow-leong/',
              location: 'SIS SR B1-1',
              from: '09:30', // hour:min
              to: '10:30', // bigger than 'from'
            }
          ]
        }
      ]
    },
    {
      name: 'Big Questions',
      index: 'COR 3001',
      description: 'Do pariatur ea veniam qui.<br/>Do pariatur ea veniam qui.',
      prerequisites: [],
      preclusions: [],
      classes: [
        {
          sem: '2019:1',
          exam: '2013-02-08 09:30:26',
          times: [
            {
              id: 0,
              day: 2,
              instructor: 'Yeow Leong',
              instructor_url: 'https://smumods.com/professor/lee-yeow-leong/',
              location: 'SIS SR B1-1',
              from: '09:30',
              to: '10:30',
            },
            {
              id: 1,
              day: 3,
              instructor: 'Yeow Leong',
              instructor_url: 'https://smumods.com/professor/lee-yeow-leong/',
              location: 'SIS SR B1-1',
              from: '09:30',
              to: '10:30',
            }
          ]
        }
      ]
    }
  ],
}

/* eslint-disable no-case-declarations */
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
