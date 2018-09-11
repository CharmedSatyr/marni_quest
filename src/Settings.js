import React from 'react'
import { Link } from 'react-router-dom'
import { Hag, Mayor } from './Characters'
import PurpleDragon from './Cormyr_symbol.jpg'

// Settings
export const Town = () => <Link to={`/settings#town`}>Goodberry Springs</Link>
export const TownHall = () => <Link to={`/settings#town-hall`}>Goodberry Springs Town Hall</Link>
export const Restaurant = () => <Link to={`/settings#restaurant`}>Ronberry</Link>
export const Inn = () => <Link to={`/settings#inn`}>The Smoking Peacock</Link>

const Settings = () => (
  <div className="settings">
    <h2>Settings</h2>
    <p>
      <a href="#town">
        <Town />
      </a>
      , a cozy little resort town in Cormyr with several shops and a lovely lakeside. When the party
      arrives, it does have some tourists, and the streets are busy during the day. However, it is
      also clear that it has seen better days. Cormyr has a number of unusual laws. For example,
      residents may not harm cats and must submit to searches by the Purple Dragons on request.
    </p>
    <p>
      <a href="#inn">
        <Inn />
      </a>
      , where the party and many tourists stay. This is a charming, colorfully painted, three story
      inn, with lots to eat and helpful twin spinster sister owners, who both sport large gray buns
      and are difficult to tell apart, except one is bossier. The inn's wooden sign is a carving of
      a peacock enjoying a pipe. Despite the colorful surroundings, the twin sisters might be{' '}
      <a
        href="https://www.dndbeyond.com/monsters/night-hag"
        rel="noopener noreferrer"
        target="_blank"
      >
        Night Hags
      </a>
      ?
    </p>
    <p>
      <a href="#town-hall">
        <TownHall />
      </a>
      , a stately building where <Mayor /> works
    </p>
    <img alt="Purple Dragon of Cormyr" src={PurpleDragon} />
    <p>
      JAIL, one street over from <TownHall />
    </p>
    <p>
      <a href="#restaurant">
        <Restaurant />
      </a>
      , expensive at 10 gp / person. Meals always count as a Heroes' Feast
    </p>
    <p>
      CAVE, where <Hag /> is magically imprisoned
    </p>
    <p>
      {' '}
      COTTAGE, belongs to <Hag />
    </p>
    <p>
      PORTAL AREA, misty and crackling with magical energy... a wild magic area! The PORTAL stands
      in the center.
    </p>
    <p> LAKE, which will feature promininenty in any FUTURE QUEST</p>
  </div>
)

export default Settings
