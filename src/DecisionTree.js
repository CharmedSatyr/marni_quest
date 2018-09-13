import React from 'react'
import { Link, Route } from 'react-router-dom'

/*** Decision Tree ***/
const Decision = ({ match }) => (
  <div>
    <h3>{decisionTree[match.params.topicId].title}</h3>
    <div>{decisionTree[match.params.topicId].text}</div>
  </div>
)

const decisionTree = {
  enterPortal: {
    title: 'Enter the Portal',
    text: <p>The party attempts to enter the portal. It is attacked by the Fey Guardian.</p>,
  },
  freeHag: {
    title: 'Free the Hag',
    text: (
      <p>The party frees the hag from her magical restraints. It is attacked by the Fey Guardian</p>
    ),
  },
}

const DecisionTree = ({ match }) => (
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

export default DecisionTree
