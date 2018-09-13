import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Characters from './Characters'
import Settings from './Settings'
import Overview from './Overview'
import Rewards from './Rewards'
import DecisionTree from './DecisionTree'

/*** Component ***/
const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route path="/characters" component={Characters} />
      <Route path="/settings" component={Settings} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/decisions" component={DecisionTree} />
    </Switch>
  </div>
)

export default Content
