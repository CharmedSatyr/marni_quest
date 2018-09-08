import React from 'react'
import { Link } from 'react-router-dom'
import { Inn, Restaurant, Town, TownHall } from './Settings'
import { MagicalIngredients } from './Rewards'

// Characters
export const Marni = () => <Link to={`/characters#marni`}>Marni Moonfoot</Link>
export const Mayor = () => <Link to={`/characters#mayor`}>Mayor Tibidus Wildoo</Link>
export const Chef = () => <Link to={`/characters#chef`}>Chef Ronpip Ronben</Link>
export const Officer = () => <Link to={`/characters#officer`}>Lieutenant Carrot Saurbrand</Link>
export const Hag = () => <Link to={`/characters#hag`}>Enchantress</Link>
export const Guardian = () => <Link to={`/characters#guardian`}>Fey Guardian</Link>
export const Banderhobb = () => (
  <a href="https://www.dndbeyond.com/monsters/banderhobb" rel="noopener noreferrer" target="_blank">
    banderhobb
  </a>
)

export const Characters = () => (
  <div>
    <h2>Characters</h2>
    <p>
      <a href="#mayor">
        <Mayor />
      </a>
      , a plump, white-haired halfling originally from the Ten Hills, MARNI'S hometown. The Wildoos
      apparently left the Ten Hills some decades ago due to a financial dispute, but Marni's family
      wasn't mixed up in that. Marni will be happy someone requested her services special, and even
      more pleased to see somebody from back home, even though the Mayor doesn't exactly flatter
      her.
    </p>
    <p>
      <a href="#chef">
        <Chef />
      </a>
      , a famous gnome chef whom Marni adores. He doesn't usually publish his recipes, but it is
      well known that he uses magical techniques and ingredients to dramatic culinary effect. Chef
      Ronben's restaurant, <Restaurant />, is legendary (and pricey!). He collects MAGICAL
      INGREDIENTS from <Town /> and the surrounding countryside.
    </p>

    <p>
      <a href="#officer">
        <Officer />
      </a>
      , a human officer serving Cormyr's famous Purple Dragons. He splits his time among{' '}
      <TownHall />, <Inn />, and <Restaurant />; eventually summons the Purple Dragons if TOWN LOST.
    </p>

    <p>
      <a href="#hag">
        <Hag />
      </a>
      , a{' '}
      <a
        href="https://www.dndbeyond.com/monsters/green-hag"
        rel="noopener noreferrer"
        target="_blank"
      >
        Green Hag
      </a>
      , magically imprisoned in a cave at quest start (she has some sort of ward that prevents her
      from being killed outright for the time being), has been using human sacrifices to keep the
      rift closed, making her responsible for the missing people but not for TOWN LOST or missing
      <MagicalIngredients />. Her sacrifices are actually responsible for TOWN SAVED and the balance
      between the planes that yields the <MagicalIngredients /> <Chef /> uses. Her evil may be
      responsible for a FUTURE QUEST if she survives this one.
    </p>

    <p>
      FEY GUARDIAN, an Eladrin Warlock/Archfey (Level 20) can use Conjure Fey to generate
      encounters, along with other spells and abilities. He is not responsible for missing tourists
      but has imprisoned the <Hag /> and opened up the PORTAL, leading to missing MAGICAL
      INGREDIENTS and the eventual TOWN LOST. Serves an Archfey Mistress who claims that the EVIL
      ENCHANTRESS is working on something terrible that will doom the world
    </p>
  </div>
)

export default Characters
