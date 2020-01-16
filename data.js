const modules = [
  {
    name: "Programming Fundamentals",
    index: "CS 101",
    description: "Do pariatur ea veniam qui.<br/>Do pariatur ea veniam qui.", // check for <br/> (new-line character)
    prerequisites: [],  // array of strings with module indexes
    preclusions: [],  // array of strings with module indexes
    classes: [
      {
        sem: "2019:1",  // year:sem
        exam:  "2013-02-08 09:30:26", // use momentJS to parse string
        required: ["sem"],
        times: [
          {
            id: 1,
            day: 2, // 0 to 6 (Mon - 0 to Sunday - 6)
            type: "sem", // sem / lec / tut
            instructor: "Yeow Leong",
            instructor_url: "https://smumods.com/professor/lee-yeow-leong/",
            location: "SIS SR B1-1",
            from: "09:30", // hour:min
            to: "10:30",  // bigger than "from"
          },
          {
            id: 2,
            day: 3, // 0 to 6 (Mon - 0 to Sunday - 6)
            type: "sem",
            instructor: "Yeow Leong",
            instructor_url: "https://smumods.com/professor/lee-yeow-leong/",
            location: "SIS SR B1-1",
            from: "09:30", // hour:min
            to: "10:30",  // bigger than "from"
          }
        ]
      }
    ]
  }
]

const courses = [
  {
    name: "Computer Science",
    sequence: [
      ["CS 101", "CS 103", "CS104", "COR 3001"],  // yr1 sem1
      ["CS 102", "CS 105", "CS 106", "IS 112", "COR 3301"],  // yr1 sem2
      ["CS 203", "CS 201", "IS 211", "CS 204", "COR 3301"],  // yr2 sem1
      ["CS 202", "CS 205", "CS 206", "COR 3301"],  // yr2 sem2
      ["CS 302", "CS 301", "COR 3301"],  // yr3 sem1
      ["COR 3301"]  // yr3 sem2
    ]
  }
]

const state = {
  sem: "2019:1",  // sem being edited / displayed
  unsaved: false, // if (unsaved and closing tab) popup to save (save or close)
  // unsaved true on any changes
}

const user = {  //  localstorage / redux saved data
  name: "Jonathan Chow",
  enrolled: "2019:1", // year:sem
  course: "Computer Science",
  uid: null,  // User ID - only when loggedin
  sid: null,  // Session ID - only when loggedin
  modules: [
    {
      index: "CS 101",
      sem: "2019:1",
      time_id: 1, // 0-indexed position of time object in array
      // time_index returns null if it is planned only for course planning (random number will be assigned when selected)
      // deselection of course with time_index will come with a pop-up that it will be erased from calendar as well
      grade: null,  //  default null - grade 1 for A+ to 12 for F (follow table below)
      bid: 0, // default median of last batch - show bid min and median
    },
  ]
}

const sharing = [ // sharing obj - array of user objs w/o sensitive info
  {
    name,
    enrolled,
    course,
    modules: [
      {
        index,
        sem,
        time_id
      }
    ]
  }
]

/*
Stage 1: Timetable/ Course Planning/ Modules/ Settings
Stage 2: Login/ Backup/ Sharing of Timetable
Stage 3: Suggestions using Analytics
*/

/*
  Grade Table
  A+  1
  A   2
  A-  3
  B+  4
  B   5
  B-  6
  C+  7
  C   8
  C-  9
  D+  10
  D   11
  F   12
  S/U 13
  NA  null
*/

/*
  DATA FLOWS
  redux -> save button / every 2 mins (localstorage)
  login to backup data
  if (logged in) SAVE BUTTON backs up to both local storage and backend
  if (logged in) RESTORE BUTTON pulls from backend and overrides localstorage and redux
  
  Using crawlers on non-logged in member's data (learn flow)
*/