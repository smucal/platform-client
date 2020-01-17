import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5

import Timetable from './Timetable'

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Timetable} />
      </Switch>
    </>
  )
}

export default Main
