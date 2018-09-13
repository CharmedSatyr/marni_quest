import React from 'react'
import { Link } from 'react-router-dom'
import { Inn, Restaurant, Town, TownHall } from './Settings'
import { MagicalIngredients, Robe } from './Rewards'
import HagPic from './green_hag.jpg'
import MarniPortrait from './Marni.jpg'

// Characters
const names = {
  marni: 'Marni Moonfoot',
  mayor: 'Mayor Tibidus Wildoo',
  chef: 'Chef Ronpip Ronben',
  officer: 'Lieutenant Carrot Saurbrand',
  peony: 'Peony Brandywood',
  hag: 'Green Hag',
  banderhobb: 'banderhobb',
  smallFey: 'boggle',
  kraken: 'Planar Kraken',
}

export const Marni = () => <Link to={`/characters#marni`}>{names.marni}</Link>
export const Mayor = () => <Link to={`/characters#mayor`}>{names.mayor}</Link>
export const Chef = () => <Link to={`/characters#chef`}>{names.chef}</Link>
export const Officer = () => <Link to={`/characters#officer`}>{names.officer}</Link>
export const Peony = () => <Link to={`/characters#peony`}>{names.peony}</Link>
export const Hag = () => <Link to={`/characters#hag`}>{names.hag}</Link>
export const Banderhobb = () => (
  <a href="https://www.dndbeyond.com/monsters/banderhobb" rel="noopener noreferrer" target="_blank">
    {names.banderhobb}
  </a>
)
export const SmallFey = () => (
  <a href="https://www.dndbeyond.com/monsters/boggle" rel="noopener noreferrer" target="_blank">
    {names.smallFey}
  </a>
)
export const Kraken = () => <Link to={`/characters#kraken`}>{names.kraken}</Link>

export const Characters = () => (
  <div className="characters">
    <h2>Characters</h2>
    <p className="marni">
      <a
        href="https://twitter.com/GorLooking to launch a new blog? Have an itch to remhome"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="Portrait of Marni" src={MarniPortrait} title="Credit: Devon Cady-Lee" />
      </a>
      <a name="marni">{names.marni}</a> was the best cook in the Ten Hills. Folks say her
      blackcurrant pie is even better than Old Mrs. Goodbody's! Unfortunately, word began to spread
      about peculiar incidents taking place around Marni's kitchen. Fully roasted chickens would
      stand up and fly out the window. Bread rolls turned to stone in the oven. A mist as green as
      peas enveloped the town for three whole days. After she accidentally turned Bragg's Creek from
      water to ale and back again, there began to be anxious whispers about where all this unnatural
      strangeness would lead. So Marni set out one morning, intent on finding some answers.
    </p>
    <p>
      After a few weeks of travel, Marni was drawn off the road by the sight of thick smoke plumes
      and lots of shouting. She darted through the forest and came upon a tiny hamlet that was under
      seige by trolls. Unfortunately, the poor townfolk had no idea how to defend themselves against
      such things. Marni tried to help, but her little sling just wasn't getting the job done.
      Suddenly, out of nowhere, a white-haired Witcher appeared in the clearing and took charge. He
      gave a few curt commands to Marni, and the two of them helped the villagers use fire and acid
      to drive away the invaders. Marni had a lot of luck targeting her magical bonfires, and she
      used up all her vinegar on the trolls who went down. Marni's energy and can-do attitude
      inspired every good person in the hamlet, and folks called her a hero that day.
    </p>
    <p>
      Marni gratefully asked the Witcher, who introduced himself as Dravin, if he could teach her to
      kill monsters, too. Those trolls could've sneaked up on the Ten Hills! Draven immediately
      declined, but he couldn't sneak away fast enough. Marni quietly followed him all the way back
      to a distant Witcher keep. Although she wasn't even allowed to go in at first, she eventually
      persuaded the Witchers there to let her be their cook and scullery maid. One bread-baking,
      pot-scrubbing year later, Marni's persistence earned her a shot at real training. After she
      survived The Trial of Grasses, no one questioned whether she belonged again.
    </p>
    <p>
      <a name="mayor">{names.mayor}</a>, a plump, white-haired halfling originally from the Ten
      Hills, Marni's hometown. The Wildoos apparently left the Ten Hills some decades ago due to a
      financial dispute, but Marni's family wasn't mixed up in that. Marni will be happy someone
      requested her services special, and even more pleased to see somebody from back home, even
      though the Mayor doesn't exactly flatter her.
    </p>
    <p>
      <a name="chef">{names.chef}</a>, a famous gnome chef whom Marni adores. He doesn't usually
      publish his recipes, but it is well known that he uses magical techniques and ingredients to
      dramatic culinary effect. Chef Ronben's restaurant, <Restaurant />, is legendary (and
      pricey!). He collects MAGICAL INGREDIENTS from <Town /> and the surrounding countryside.
    </p>

    <p>
      <a name="officer">{names.officer}</a>, a human officer serving Cormyr's famous Purple Dragons.
      He splits his time among <TownHall />, <Inn />, and <Restaurant />; eventually summons the
      Purple Dragons if TOWN LOST.
    </p>

    <p>
      <a name="peony">{names.peony}</a>, Marni's great aunt, is a trash-talking halfling who smokes
      a pipe and wears a <Robe />.
    </p>
    <p>
      Peony is a Wizard/Cleric of the Arcana domain, but she is mostly into it for the science. She
      runs around and takes notes on everything she's seen in the Planes and is eager to publish her
      findings. However, her life ended up being much more adventurous than she bargained for, and
      her actions have changed the course of Marni's life.
    </p>
    <p className="hag">
      <img alt="Green Hag" src={HagPic} />
      <a name="hag">The Enchantress</a>, a{' '}
      <a
        href="https://www.dndbeyond.com/monsters/green-hag"
        rel="noopener noreferrer"
        target="_blank"
      >
        {names.hag}
      </a>
      , magically imprisoned in a cave at quest start (she has some sort of ward that prevents her
      from being killed outright for the time being), has been using human sacrifices to keep the
      rift closed, making her responsible for the missing people but not for TOWN LOST or missing
      <MagicalIngredients />. Her sacrifices are actually responsible for TOWN SAVED and the balance
      between the planes that yields the <MagicalIngredients /> <Chef /> uses. Her evil may be
      responsible for a FUTURE QUEST if she survives this one.
    </p>
    <p>
      The <a name="kraken">{names.kraken}</a> is a seige engine created in Pandemonium to break down
      the barriers among the Planes on behalf of Lord Garagos. Or maybe an{' '}
      <a
        href="https://www.dndbeyond.com/monsters/astral-dreadnought"
        rel="noopener noreferrer"
        target="_blank"
      >
        Astral Dreadnought
      </a>
      ? Or maybe an{' '}
      <a
        href="https://brooke-johnson.blogspot.com/2011/07/lessons-learned-from-my-first-d.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        Astral Kraken
      </a>
      ?
    </p>
  </div>
)

export default Characters
