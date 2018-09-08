import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Characters from './Characters'
import Settings from './Settings'
import Overview from './Overview'
import { Outcomes } from './Overview'
import Rewards from './Rewards'
import { MagicalIngredients } from './Rewards'

/*** Component ***/
const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route path="/characters" component={Characters} />
      <Route path="/settings" component={Settings} />
      <Route path="/mechanics" component={Mechanics} />
      <Route path="/outcomes" component={Outcomes} />
      <Route path="/rewards" component={Rewards} />
      <Route path="/decisions" component={Decisions} />
    </Switch>
  </div>
)

export default Content

/*** Decision Tree ***/
const Decision = ({ match }) => (
  <div>
    <h3>{decisionTree[match.params.topicId].title}</h3>
    <div>{decisionTree[match.params.topicId].text}</div>
  </div>
)

const enterPortal = {
  title: 'Enter the Portal',
  text: <p>The party attempts to enter the portal. It is attacked by the Fey Guardian.</p>,
}

const freeHag = {
  title: 'Free the Hag',
  text: (
    <p>The party frees the hag from her magical restraints. It is attacked by the Fey Guardian</p>
  ),
}

const decisionTree = {
  enterPortal,
  freeHag,
}

const Decisions = ({ match }) => (
  <div>
    <h2>Decisions</h2>
    <ul>
      <li>
        <Link to={`${match.url}/enterPortal`}>Enter the Portal</Link>
      </li>
      <li>
        <Link to={`${match.url}/freeHag`}>Free the Hag</Link>
      </li>
    </ul>
    <Route path={`${match.path}/:topicId`} component={Decision} />
    <Route exact path={match.path} render={() => <h3>Choose your path.</h3>} />
  </div>
)

/*** LINKS ***/

const Mechanics = () => (
  <div>
    <h2>Mechanics</h2>
    <p>
      SMALL FEY: 1d6 of tiny- or small-sized challenge range 1d4 Fey Forest creatures chosen by DM.
    </p>

    <p>
      FEY ENCOUNTER:
      <br />
      DM roll 1d20:
      <br />
      1-5 is Forest encounters 1-4
      <br />
      5-10 is Forest encounters 5-10
      <br />
      11-16 is Forest encounters 11-16
      <br />
      17-20 is Forest encounters 17-20
    </p>

    <p>
      PORTAL, an interplanar rift between the world and a Fey Kingdom. Creatures, based on
      Xanathar's Random Encounter Tables Forest Encounters, keep popping out of the portal based on
      COUNTDOWN. It is not possible to see where the PORTAL leads without actually entering.
    </p>

    <p>
      COUNTDOWN
      <br />
      Day 1: 1 x FEY ENCOUNTER, wild magic area around PORTAL AREA becomes apparent
      <br />
      Day 2: 2 x FEY ENCOUNTER, wild magic area slightly larger, <MagicalIngredients /> spreading
      with wild magic
      <br />
      Day 3: 4 x FEY ENCOUNTER, wild magic area extends to LAKE, etc.
      <br />
      Day 4: 8 x FEY ENCOUNTER, wild magic area spreads to TOWN, etc.
      <br />
      Day 5: 12 x FEY ENCOUNTER, entire area is wild magic area, etc.
      <br />
      If the party takes more than five days to complete this quest, it will result in TOWN LOST.
    </p>

    <p>
      PORTAL AREA: Any spells OR cantrips cast by party members or foes in this area have a chance
      of setting off wild magic. A result of 1 on a 1d20 roll will trigger it; this chance is
      independent of a wild mage's personal chances of a wild magical consequence.
    </p>
  </div>
)
