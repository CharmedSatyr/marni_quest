import React from 'react'
import { Link } from 'react-router-dom'
import { Chef, Hag, Mayor } from './Characters'
import { Town } from './Settings'

// Reward
export const MayorsReward = () => <Link to={`/rewards#mayor`}>a reward</Link>
export const MagicalIngredients = () => (
  <Link to={`/rewards#magical-ingredients`}>magical ingredients</Link>
)

const Rewards = () => (
  <div>
    <h2>Rewards</h2>
    <p>
      <a href="#mayor">Mayor's Reward</a>: <Mayor /> promises 20,000 gold pieces on completion of
      the contract. However, if this is paid out, it will be paid in golden lions, the local
      Cormyrean currency. Due to fluctuations in local markets, and pressures upon the local
      magistrates, golden lions are worth approximately 1/2 of gold currency used elsewhere in
      Faerûn. The total payout can be converted to 10,000 gold pieces total, for the party.
    </p>
    <p>
      CHEF'S REWARD: 2,000 golden lions + CHEF's SECRET COOKBOOK, which gives +5 to all cooking
      rolls, guarantees a modified cooking roll of 20+ yields a Heroes' Feast, and includes MAGICAL
      RECIPES.
    </p>
    <ul>
      <li>
        BONUS GAINED: Marni recieves a shipment of <MagicalIngredients /> once per week from a
        grateful
        <Chef />.
      </li>
      <li>
        BONUS LOST: <Chef /> loses reputation and CHEF's RESTAURANT soon after, and Marni blames
        herself. FUTURE QUEST might be able to reverse this outcome.
      </li>
    </ul>
    <p>
      <a href="#magical-ingredients">Magical Ingredients</a>: Glowing mushrooms, levitating carrots,
      leafy vegetables that wiggle when no one is looking, multicolored vines, and other plants that
      only grow in <Town /> due to the thin wall between it and the Fey world. Required for MAGICAL
      RECIPES.
    </p>

    <p>
      MAGICAL RECIPES (can only be created by cooks with <MagicalIngredients />, plus additional
      ingredient cost of 2 sp each):
    </p>
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
      TOWN SAVED: The Witchers don't receive any extra reward, but the town is available for future
      visits and free for relaxation. Townsfolk show lots of appreciation. FUTURE QUEST possible.
    </p>

    <p>
      TOWN LOST: <MayorsReward /> is unavailable, ROYAL OFFICER accuses Witchers of misdeeds and has
      the army sent to <Town /> to save it. Witchers must leave <Town /> immediately. <Town /> is so
      damaged that it is unavailable for future visits or FUTURE QUEST.
    </p>

    <p>
      FUTURE QUEST: TBD involving <Hag />
    </p>
  </div>
)

export default Rewards
