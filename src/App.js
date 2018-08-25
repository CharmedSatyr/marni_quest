import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import logo from './D&D Transparent.png'
import marni from './Marni_Portrait.jpg'

const Overview = () => (
  <div className="overview">
    <header>
      <img alt="Portrait of Marni" src={marni} />
      <h2>
        Overview: Marni's Quest
        <br />
        <small>A Monster Hunting Adventure featuring Miss Marni Moonfoot</small>
        <br />
        <small>Recommended for levels 11-15</small>
      </h2>
    </header>
    <main>
      <p>
        Marni receives a contract via messenger: Something has been disappearing tourists in a
        famous culinary TOWN! The MAYOR offers MAYOR'S REWARD to eliminate the threat, which has
        unsettled tourists. Marni is excited because that is where CHEF lives. Marni invites her
        adventuring friends to come with her. For incentive, she buys everyone tickets for one of
        CHEF'S cooking shows at the THEATER!
      </p>
      <p>
        When the party arrives in the TOWN, it is not particularly crowded but is not empty, either.
        The party goes to the THEATER, but there is a sign on the door that the cooking show is
        cancelled due to a robbery!
      </p>
      <p>
        Marni wants to meet the CHEF. CHEF'S RESTAURANT is closed. If the party goes to CHEF'S
        HOUSE, the CHEF explains that his MAGICAL INGREDIENTS and other preparations have been
        stolen, and not for the first time! He offers the adventurers CHEF'S REWARD to figure out
        what's happening.
      </p>
      <p>
        CHEF doesn't know what the issue is but blames the EVIL ENCHANTRESS on the outskirts of
        town, and that is the party's first real lead.
      </p>
      <p>
        When going to visit the EVIL ENCHANTRESS, there is a pie tin on the road on the way there.
        Party finds her COTTAGE is smoldering.
      </p>
      <p>
        Looking around, party encounters SMALL FEY carrying MAGICAL INGREDIENTS and assorted
        prepared MAGICAL RECIPES and other foods.
      </p>
      <p>
        Soon after the SMALL FEY encounter, if the party continues to explore the nearby area, they
        will roll for FEY ENCOUNTER and discover a PORTAL beyond.
      </p>
      <p>
        If party attempts to enter the portal, they will encounter the FEY GUARDIAN, who will escape
        rather than stand his ground during this first encounter if he has trouble fighting them.
        FEY GUARDIAN warns them to leave town, for his Mistress has commanded him to seize it, and
        it only, to prevent some unspecified FUTURE QUEST.
      </p>
      <p>
        If the party bests the FEY GUARDIAN and enters the PORTAL, they will face FEY ENCOUNTERS for
        the forseeable future but not accomplish much... and meanwhile the COUNTDOWN is ticking.
      </p>
      <p>
        If the party leaves the PORTAL AREA, they can follow nearby paths to the CAVE and encounter
        the EVIL ENCHANTRESS, who gives her version of events and might even explain her
        responsibility for MAGICAL INGREDIENTS if asked. However, she will be extremely reluctant to
        admit responsibility for the missing tourists.
      </p>
      <p>
        The party must decide what to do with the EVIL ENCHANTRESS and whether to pursue the FEY
        GUARDIAN to close the portal. The outcome of the quest, as well as the availability of
        future quests, will depend on their choices.
      </p>
    </main>
  </div>
)

const Characters = () => (
  <div>
    <h2>Characters</h2>
    <p>MAYOR</p>

    <p>
      CHEF, a famous magical chef whom Marni adores. He publishes bestselling cookbooks and actually
      cooks in front of audiences at the local theater, showing how certain magical techniques can
      be used for dramatic culinary effect. His restaurant in that town is legendary (and pricey!).
      He collects MAGICAL INGREDIENTS from areas around the town, including CHEF'S HOUSE and CHEF'S
      RESTAURANT.
    </p>

    <p>
      ROYAL OFFICER, splits his time among TOWN HALL, INN, and CHEF'S RESTAURANT; eventually summons
      the army if TOWN LOST
    </p>

    <p>
      EVIL ENCHANTRESS, stats TBD, magically imprisoned in a cave at quest start (she has some sort
      of ward that prevents her from being killed outright for the time being), has been using human
      sacrifices to keep the rift closed, making her responsible for the missing people but not for
      TOWN LOST or missing MAGICAL INGREDIENTS. Her sacrifices are actually responsible for TOWN
      SAVED and the balance between the planes that yields the MAGICAL INGREDIENTS the CHEF uses.
      Her evil may be responsible for a FUTURE QUEST if she survives this one.
    </p>

    <p>
      FEY GUARDIAN, an Eladrin Warlock/Archfey (Level 20) can use Conjure Fey to generate
      encounters, along with other spells and abilities. He is not responsible for missing tourists
      but has imprisoned the EVIL ENCHANTRESS and opened up the PORTAL, leading to missing MAGICAL
      INGREDIENTS and the eventual TOWN LOST. Serves an Archfey Mistress who claims that the EVIL
      ENCHANTRESS is working on something terrible that will doom the world
    </p>
  </div>
)

const Settings = () => (
  <div>
    <h2>Settings</h2>
    <p>TOWN</p>
    <p>INN, where the party and many tourists stay</p>
    <p>TOWN HALL, a stately building where the Mayor works</p>
    <p>MAYOR'S HOUSE, a grand old mansion near the TOWN HALL</p>
    <p>THEATER, where the CHEF occasionally performs cooking shows</p>
    <p> CHEF'S HOUSE</p>
    <p> CHEF'S RESTAURANT, expensive at 10 gp / person. Meals always count as a Heroes' Feast</p>
    <p>CAVE, where EVIL ENCHANTRESS is magically imprisoned</p>
    <p> COTTAGE, belongs to EVIL ENCHANTRESS</p>
    <p>
      PORTAL AREA, misty and crackling with magical energy... a wild magic area! The PORTAL stands
      in the center.
    </p>
    <p> LAKE, which will feature promininenty in any FUTURE QUEST</p>
  </div>
)

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
      Day 1: 1 x FEY ENCOUNTER
      <br />
      Day 2: 2 x FEY ENCOUNTER
      <br />
      Day 3: 4 x FEY ENCOUNTER
      <br />
      Day 4: 8 x FEY ENCOUNTER
      <br />
      Day 5: 12 x FEY ENCOUNTER
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
const Outcomes = () => (
  <div>
    <h2>Outcomes</h2>
    <p>
      1) rescue the EVIL ENCHANTRESS and kill the FEY GUARDIAN -> CHEF'S REWARD, CHEF'S BONUS, TOWN
      SAVED | MAYOR'S REWARD lost | possible FUTURE QUEST;
    </p>
    <p>
      2) kill both the EVIL ENCHANTRESS and the FEY GUARDIAN -> TOWN SAVED, CHEF'S REWARD, MAYOR'S
      REWARD | CHEF'S BONUS LOST | no FUTURE QUEST;
    </p>
    <p>
      3) kill the EVIL ENCHANTRESS but not the FEY GUARDIAN -> if within 5 days, MAYOR's REWARD |
      TOWN LOST, no CHEF'S REWARD, CHEF'S BONUS LOST | no FUTURE QUEST;
    </p>
    <p>
      4) rescue the EVIL ENCHANTRESS and ignore the FEY GUARDIAN -> barrier will temporarily be
      restored, but situation will revert as soon as the party leaves TOWN -> CHEF'S REWARD |
      MAYOR'S REWARD lost, CHEF'S BONUS LOST, TOWN LOST | no FUTURE QUEST
    </p>
  </div>
)
const Rewards = () => (
  <div>
    <h2>Rewards</h2>
    <p>
      CHEF'S REWARD: 2,000 gp + CHEF's SECRET COOKBOOK, which gives +5 to all cooking rolls,
      guarantees a modified cooking roll of 20+ yields a Heroes' Feast, and includes MAGICAL
      RECIPES.
    </p>
    <ul>
      <li>
        BONUS GAINED: Marni recieves a shipment of MAGICAL INGREDIENTS once per week from a grateful
        CHEF.
        <br />
        BONUS LOST: CHEF loses reputation and CHEF's RESTAURANT soon after, and Marni blames
        herself. FUTURE QUEST might be able to reverse this outcome.
      </li>
    </ul>
    <p>
      MAGICAL INGREDIENTS: Glowing mushrooms, levitating carrots, leafy vegetables that wiggle when
      no one is looking, multicolored vines, and other plants that only grow in TOWN due to the thin
      wall between it and the Fey world. Required for MAGICAL RECIPES.
    </p>
    <p>
      MAGICAL RECIPES (can only be created by cooks with MAGICAL INGREDIENTS, plus additional
      ingredient cost of 2 sp each):
      <br />
      1) Muffins of Strong Mind: Render eaters immune to Charm or Fear effects for 6 hours. Takes 3
      hours to prepare a dozen and last 1 week uneaten.
      <br />
      2) TBD
      <br />
      3) TBD
      <br />
      4) TBD
      <br />
      5) TBD
    </p>

    <p>MAYOR's REWARD: 10,000 gp</p>

    <p>
      TOWN SAVED: The Witchers don't receive any extra reward, but the town is available for future
      visits and free for relaxation. Townsfolk show lots of appreciation. FUTURE QUEST possible.
    </p>

    <p>
      TOWN LOST: MAYOR'S REWARD is unavailable, ROYAL OFFICER accuses Witchers of misdeeds and has
      the army sent to TOWN to save it. Witchers must leave TOWN immediately. TOWN is so damaged
      that it is unavailable for future visits or FUTURE QUEST.
    </p>

    <p>FUTURE QUEST: TBD involving EVIL ENCHANTRESS</p>
  </div>
)

/*
const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)
*/

/* const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
  </div>
) */

const NavBar = () => (
  <nav>
    <div className="nav-title">
      <h1>Marni's Quest</h1>
    </div>
    <div className="nav-links">
      <div className="nav-link">
        <Link to="/">Overview</Link>
      </div>
      <div className="nav-link">
        <Link to="/characters">Characters</Link>
      </div>
      <div className="nav-link">
        <Link to="/settings">Settings</Link>
      </div>
      <div className="nav-link">
        <Link to="/mechanics">Mechanics</Link>
      </div>
      <div className="nav-link">
        <Link to="/outcomes">Outcomes</Link>
      </div>
      <div className="nav-link">
        <Link to="/rewards">Rewards</Link>
      </div>
      {/* <div>
          <Link to="/topics">Topics</Link>
        </div> */}
    </div>
    <div className="nav-logo">
      A <img alt="D&D Logo" src={logo} /> Homebrew
    </div>
  </nav>
)

const Content = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route path="/characters" component={Characters} />
      <Route path="/settings" component={Settings} />
      <Route path="/mechanics" component={Mechanics} />
      <Route path="/outcomes" component={Outcomes} />
      <Route path="/rewards" component={Rewards} />
      {/* <Route path="/topics" component={Topics} /> */}
    </Switch>
  </div>
)

const Footer = () => (
  <footer>
    <p>
      Made with <span className="heart">&#9829;</span> by{' '}
      <a href="https://github.com/CharmedSatyr" rel="noreferrer noopener" target="_blank">
        CharmedSatyr
      </a>
    </p>
    <p>
      The content of this project itself is licensed under the{' '}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
        rel="noreferrer noopener"
        target="_blank"
      >
        Creative Commons Attribution Share Alike 4.0 International
      </a>{' '}
      license, and the underlying source code used to format and display that content is licensed
      under the{' '}
      <a
        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
        rel="noreferrer noopener"
        target="_blank"
      >
        GNU General Public License v3.0
      </a>
      .
    </p>
    <p>
      Dungeons &amp; Dragons, D&amp;D, their respective logos, and all Wizards titles and characters
      are property of Wizards of the Coast LLC in the U.S.A. and other countries. ©2018 Wizards.
    </p>
  </footer>
)

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Content />
      <Footer />
    </div>
  </Router>
)

export default App
