import React from 'react'
import { Link } from 'react-router-dom'
import { Chef, Hag, Mayor } from './Characters'
import PurpleDragon from './img/cormyr_shield.png'

// Settings
const names = {
  town: 'Goodberry Springs',
  get townHall() {
    return `${this.town} Town Hall`
  },
  restaurant: 'Ronberry',
  inn: 'The Smoking Peacock',
  cave: 'Cave!',
  cottage: 'Cottage!',
  portalArea: 'Portal Area!',
  lake: 'Ordenfar Lake',
}

export const Town = () => <Link to={`/settings#town`}>{names.town}</Link>
export const TownHall = () => <Link to={`/settings#town-hall`}>{names.townHall}</Link>
export const Restaurant = () => <Link to={`/settings#restaurant`}>{names.restaurant}</Link>
export const Inn = () => <Link to={`/settings#inn`}>{names.inn}</Link>

const Settings = () => (
  <div className="settings">
    <h2>Settings</h2>
    <p>
      <a name="town">{names.town}</a>, a cozy little resort town in{' '}
      <a
        href="http://forgottenrealms.wikia.com/wiki/Cormyr"
        rel="noopener noreferrer"
        target="_blank"
      >
        Cormyr
      </a>{' '}
      with several shops and a lovely lakeside. When the party arrives, it does have some tourists,
      and the streets are busy during the day. However, it is also clear that it has seen better
      days. Cormyr has a number of unusual laws. For example, residents may not harm cats and must
      submit to searches by the Purple Dragons on request.
    </p>
    <p>
      <a name="town-hall">{names.townHall}</a>, a stately building where <Mayor /> works. Visitors
      can exchange their gold for Cormyrean golden lions here. The basement holds the town's jail.
    </p>
    <img alt="Purple Dragon of Cormyr" src={PurpleDragon} />
    <p>
      <a name="inn">{names.inn}</a>, where the party and many tourists stay. This is a charming,
      colorfully painted, three story inn, with lots to eat and helpful twin spinster sister owners,
      who both sport large gray buns and are difficult to tell apart, except one is bossier. The
      inn's wooden sign is a carving of a peacock enjoying a pipe.
    </p>

    <p>
      <a name="restaurant">{names.restaurant}</a>, <Chef />
      's flagship restaurant. Though the magical meals are expensive at 10 golden lions per person,
      they always count as Heroes' Feasts!
    </p>
    <p>
      <a name="cave">{names.cave}</a>, where <Hag /> is magically imprisoned
    </p>
    <p>
      <a name="cottage">{names.cottage}</a>, belongs to <Hag />
    </p>
    <p>
      <a name="portalArea">{names.portalArea}</a>, misty and crackling with magical energy... a wild
      magic area! The PORTAL stands in the center.
    </p>
    <p>
      <a name="lake">{names.lake}</a>, a tourist attraction and recreational space in <Town />.
    </p>
  </div>
)

export default Settings
