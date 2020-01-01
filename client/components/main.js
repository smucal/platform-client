import React from 'react'
import { Route, Switch } from 'react-router-dom' // react-router v4/v5

const Landing = () => {
  return (
    <div>Hello World</div>
  )
}

const Main = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  )
}

export default Main
