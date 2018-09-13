import React from 'react'
import { Link } from 'react-router-dom'
import { Mayor, Peony } from './Characters'
import { Town } from './Settings'

import robe from './img/robe.jpg'

// Reward
const names = {
  mayor: "Mayor's reward",
  robe: 'The Robe of Stars',
}
export const MayorsReward = () => <Link to={`/rewards#mayor`}>{names.mayor}</Link>
export const MagicalIngredients = () => (
  <Link to={`/rewards#magical-ingredients`}>magical ingredients</Link>
)
export const MagicalRecipes = () => <Link to={`/rewards#magical-recipes`}>magical recipes</Link>
export const ChefsReward = () => <Link to={`/rewards#chef`}>a reward</Link>
export const Robe = () => (
  <a
    href="https://www.dndbeyond.com/magic-items/robe-of-stars"
    rel="noopener noreferrer"
    target="_blank"
  >
    {names.robe}
  </a>
)

const Rewards = () => (
  <div className="rewards">
    <h2>Rewards</h2>
    <p>
      <a href="#mayor">Mayor's Reward</a>: <Mayor /> promises 10,000 golden lions, roughly equal in
      value to the same in gold pieces, on completion of the contract.
    </p>
    <p>
      <a href="#chef">Chef's Reward</a>: CHEF's SECRET COOKBOOK, which gives +5 to all cooking
      rolls, guarantees a modified cooking roll of 20+ yields a Heroes' Feast, and includes MAGICAL
      RECIPES. (OR just the{' '}
      <a
        href="https://half-cover.com/homebrew/feats/gourmand/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Gourmand Homebrew feat
      </a>
      , TBD.)
    </p>
    <p>
      <a href="#magical-ingredients">Magical Ingredients</a>: Glowing mushrooms, levitating carrots,
      leafy vegetables that wiggle when no one is looking, multicolored vines, and other plants that
      only grow in <Town /> due to the thin wall between it and the Fey world. Required for MAGICAL
      RECIPES.
    </p>

    <p>
      <a href="#magical-recipes">Magical Recipes</a>: These special treats can only be created by
      cooks with <MagicalIngredients />, plus additional ingredients that cost a total of 2 sp per
      recipe batch:
    </p>
    <img src={robe} alt="The Robe of Stars" />
    <ul>
      <li>
        Muffins of Strong Mind: Render eaters immune to Charm or Fear effects for 6 hours. Takes 3
        hours to prepare a dozen and last 1 week uneaten.
      </li>
      <li>Muffins of Insolence</li>
      <li>Boring Muffins: Prevent Wild Magic surges for x hours</li>
      <li>TBD</li>
      <li>TBD</li>
    </ul>
    <p>
      <a name="robe">{names.robe}</a> was used by <Peony /> to teleport to and from the Astral Plane
      until a lovesick Githyanki's <em>geas</em> prevented her from using it.
    </p>
  </div>
)

export default Rewards
