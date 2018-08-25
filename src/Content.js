import React from 'react'
import marni from './Marni_Portrait.jpg'
import { Link } from 'react-router-dom'

/*** Settings ***/
export const Town = () => <Link to={`/settings#town`}>Goodberry Springs</Link>

/*** Characters ***/
export const Marni = () => <Link to={`/characters#marni`}>Marni Moonfoot</Link>
export const Mayor = () => <Link to={`/characters#mayor`}>Mayor</Link>
export const Chef = () => <Link to={`/characters#chef`}>Chef Ronpip Ronben</Link>
export const Officer = () => <Link to={`/characters#royal-officer`}>Royal Officer</Link>
export const Enchantress = () => <Link to={`/characters#enchantress`}>Enchantress</Link>
export const Guardian = () => <Link to={`/characters#guardian`}>Fey Guardian</Link>

export const Overview = () => (
  <div className="overview">
    <header>
      <img alt="Portrait of Marni" src={marni} />
      <h2>
        Marni's Quest: The Magical Muffins of Goodberry Springs
        <br />
        <small>A Monster Hunting Adventure featuring Marni Moonfoot</small>
        <br />
        <small>Recommended for levels 11-15</small>
      </h2>
    </header>
    <main>
      <p>
        Marni receives a contract via messenger: Something has been disappearing tourists in the
        famous resort town of <Town />! The <Mayor /> offers MAYOR'S REWARD to eliminate the threat,
        which has unsettled tourists. Marni is excited because that is where the famous <Chef />{' '}
        lives. Marni invites her adventuring friends to come with her. For incentive, she buys
        everyone tickets for one of Chef Ronben's cooking shows at the THEATER!
      </p>
      <p>
        When the party arrives in the <Town />, it is not particularly crowded but is not empty,
        either. The party goes to the THEATER, but there is a sign on the door that the cooking show
        is cancelled due to a robbery!
      </p>
      <p>
        Marni wants to meet the <Chef />. CHEF'S RESTAURANT is open, and the party can eat there,
        but the CHEF is not there until they finish a meal. If they go to the CHEF'S RESTAURANT,
        they will meet the ROYAL OFFICER, who says the strange events of late have led him to
        request a contingent from the local garrison to watch the town (otherwise, he will tell them
        later at the INN). If the party goes to CHEF'S HOUSE, the <Chef /> explains that his MAGICAL
        INGREDIENTS and other preparations have been stolen, and not for the first time! He offers
        the adventurers CHEF'S REWARD to figure out what's happening.
      </p>
      <p>
        <Chef /> doesn't know what the issue is but blames the HAG on the outskirts of town, and
        that is the party's first real lead.
      </p>
      <p>
        When going to visit the HAG, there is a pie tin on the road on the way there. Party finds
        her COTTAGE is smoldering.
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
        the HAG, who gives her version of events and might even explain her responsibility for
        MAGICAL INGREDIENTS if asked. However, she will be reluctant to admit responsibility for the
        missing tourists.
      </p>
      <p>
        When the party tries to free her, they are attacked again by the FEY GUARDIAN, who explains
        that the HAG performs blood magic and his Mistress abhors her. He says that he does not know
        her plan, but that she cannot be trusted! He will again flee rather than fight to the death.
      </p>
      <p>
        If the party frees the HAG, she admits that she does what is necessary and will ask that
        either they acquire a human sacrifice for her to complete the barrier between worlds, or
        else stay out of her way while she acquires one that night.
      </p>
      <p>
        If the party acquires a human sacrifice, she takes it, and when they present the person to
        her, the FEY GUARDIAN will fight them to the death.
      </p>
      <p>
        If the party refuses to help the HAG, she will go to try to gather a sacrifice herself, but
        the ROYAL OFFICER'S troops will find and arrest her. The HAG will try to defend her actions
        (she was attempting to steal a child through a window) by saying the party understands what
        is at stake and sanction her actions. Therefore, if the party does n ot help the HAG, they
        automatically forfeit the MAYOR'S REWARD and achieve a "Wanted" status in town. The party
        must break her out of the local jail if they want her to complete her magic. Then they have
        to find her a tourist anyway. If they do not break her out of jail, she will count as
        incapacitated.
      </p>
      <p>
        The party (if there is a mage of a high enough level) can itself attempt to perform a spell
        to close the gate itself. Mages can find the HAG's Blood Magic Tome if they cast True Seeing
        or otherwise are able to use truesight near the HAG's burned cottage. The Blood Magic Tome
        will instruct the mage how to sacrifice a humanoid, and *cook >:D * its blood together with
        certain magical plants, to seal the portal. [This is a blatant attempt to make Marni commit
        human sacrifice.] When the party starts this, the FEY GUARDIAN attacks and fights to the
        death. Since they are nearby the portal, monsters are coming out of the portal more rapidly
        than usual, too. If there is any reason to believe the Guards are watching the Witchers (for
        example, if they allowed the HAG to try to fetch her own human sacrifice), those guards
        might be able to track the Witchers down at this moment and attack everybody in sight.
      </p>
      <p>
        The outcome of the quest, as well as the availability of future quests, will depend on the
        party's choices...
      </p>
    </main>
  </div>
)

export const Characters = () => (
  <div>
    <h2>Characters</h2>
    <a href="#mayor">
      <p>
        Mayor of <Town />
      </p>
    </a>

    <p>
      <Chef />, a famous gnome chef whom Marni adores. He doesn't usually publish his recipes, but
      he does perform in front of audiences at the local theater, showing how certain magical
      techniques can be used to dramatic culinary effect. Chef Ronben's restaurant, Ronberry, is
      legendary (and pricey!). He collects MAGICAL INGREDIENTS from Goodberry Springs and the
      surrounding countryside, and he cultivates a few select varieties in his home and restaurant.
    </p>

    <p>
      ROYAL OFFICER, splits his time among TOWN HALL, INN, and CHEF'S RESTAURANT; eventually summons
      the army if TOWN LOST
    </p>

    <p>
      HAG, stats TBD, magically imprisoned in a cave at quest start (she has some sort of ward that
      prevents her from being killed outright for the time being), has been using human sacrifices
      to keep the rift closed, making her responsible for the missing people but not for TOWN LOST
      or missing MAGICAL INGREDIENTS. Her sacrifices are actually responsible for TOWN SAVED and the
      balance between the planes that yields the MAGICAL INGREDIENTS the <Chef /> uses. Her evil may
      be responsible for a FUTURE QUEST if she survives this one.
    </p>

    <p>
      FEY GUARDIAN, an Eladrin Warlock/Archfey (Level 20) can use Conjure Fey to generate
      encounters, along with other spells and abilities. He is not responsible for missing tourists
      but has imprisoned the HAG and opened up the PORTAL, leading to missing MAGICAL INGREDIENTS
      and the eventual TOWN LOST. Serves an Archfey Mistress who claims that the EVIL ENCHANTRESS is
      working on something terrible that will doom the world
    </p>
  </div>
)

export const Settings = () => (
  <div>
    <h2>Settings</h2>
    <a href="#town">
      <p>
        <Town />
      </p>
    </a>
    <p>INN, where the party and many tourists stay</p>
    <p>TOWN HALL, a stately building where the Mayor works</p>
    <p>MAYOR'S HOUSE, a grand old mansion near the TOWN HALL</p>
    <p>JAIL, one street over from TOWN HALL</p>
    <p>
      THEATER, where the <Chef /> occasionally performs cooking shows
    </p>
    <p> CHEF'S HOUSE</p>
    <p> CHEF'S RESTAURANT, expensive at 10 gp / person. Meals always count as a Heroes' Feast</p>
    <p>CAVE, where HAG is magically imprisoned</p>
    <p> COTTAGE, belongs to HAG</p>
    <p>
      PORTAL AREA, misty and crackling with magical energy... a wild magic area! The PORTAL stands
      in the center.
    </p>
    <p> LAKE, which will feature promininenty in any FUTURE QUEST</p>
  </div>
)

export const Mechanics = () => (
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
      Day 2: 2 x FEY ENCOUNTER, wild magic area slightly larger, MAGICAL INGREDIENTS spreading with
      wild magic
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
export const Outcomes = () => (
  <div>
    <h2>Outcomes</h2>
    <ul>
      <p>
        <li>
          Rescue the HAG and kill the FEY GUARDIAN -> CHEF'S REWARD, CHEF'S BONUS, TOWN SAVED |
          MAYOR'S REWARD lost | possible FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Kill both the HAG and the FEY GUARDIAN -> TOWN SAVED, CHEF'S REWARD, MAYOR'S REWARD |
          CHEF'S BONUS LOST | no FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Kill the HAG but not the FEY GUARDIAN -> if within 5 days, MAYOR'S REWARD | TOWN LOST, no
          CHEF'S REWARD, CHEF'S BONUS LOST | no FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Rescue the HAG and ignore the FEY GUARDIAN -> barrier will temporarily be restored, but
          situation will revert as soon as the party leaves TOWN -> CHEF'S REWARD | MAYOR'S REWARD
          lost, CHEF'S BONUS LOST, TOWN LOST | no FUTURE QUEST
        </li>
      </p>
    </ul>
  </div>
)

export const Rewards = () => (
  <div>
    <h2>Rewards</h2>
    <p>MAYOR'S REWARD: 10,000 gp</p>
    <p>
      CHEF'S REWARD: 2,000 gp + CHEF's SECRET COOKBOOK, which gives +5 to all cooking rolls,
      guarantees a modified cooking roll of 20+ yields a Heroes' Feast, and includes MAGICAL
      RECIPES.
    </p>
    <ul>
      <li>
        BONUS GAINED: Marni recieves a shipment of MAGICAL INGREDIENTS once per week from a grateful
        <Chef />.
      </li>
      <li>
        BONUS LOST: <Chef /> loses reputation and CHEF's RESTAURANT soon after, and Marni blames
        herself. FUTURE QUEST might be able to reverse this outcome.
      </li>
    </ul>
    <p>
      MAGICAL INGREDIENTS: Glowing mushrooms, levitating carrots, leafy vegetables that wiggle when
      no one is looking, multicolored vines, and other plants that only grow in <Town /> due to the
      thin wall between it and the Fey world. Required for MAGICAL RECIPES.
    </p>
    <p>
      MAGICAL RECIPES (can only be created by cooks with MAGICAL INGREDIENTS, plus additional
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
      TOWN LOST: MAYOR'S REWARD is unavailable, ROYAL OFFICER accuses Witchers of misdeeds and has
      the army sent to <Town /> to save it. Witchers must leave <Town /> immediately. <Town /> is so
      damaged that it is unavailable for future visits or FUTURE QUEST.
    </p>

    <p>FUTURE QUEST: TBD involving HAG</p>
  </div>
)
