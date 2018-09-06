import React from 'react'
import marni from './Marni_Portrait.jpg'
import { Link, Route, Switch } from 'react-router-dom'
import PurpleDragon from './Cormyr_symbol.jpg'

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
// Settings
const Town = () => <Link to={`/settings#town`}>Goodberry Springs</Link>
const TownHall = () => <Link to={`/settings#town-hall`}>Goodberry Springs Town Hall</Link>
const Restaurant = () => <Link to={`/settings#restaurant`}>Ronberry</Link>
const Inn = () => <Link to={`/settings#inn`}>The Smoking Peacock</Link>

// Characters
export const Marni = () => <Link to={`/characters#marni`}>Marni Moonfoot</Link>
const Mayor = () => <Link to={`/characters#mayor`}>Mayor Tibidus Wildoo</Link>
const Chef = () => <Link to={`/characters#chef`}>Chef Ronpip Ronben</Link>
const Officer = () => <Link to={`/characters#officer`}>Lieutenant Carrot Saurbrand</Link>
const Hag = () => <Link to={`/characters#hag`}>Enchantress</Link>
export const Guardian = () => <Link to={`/characters#guardian`}>Fey Guardian</Link>

// Reward
const MayorsReward = () => <Link to={`/rewards#mayor`}>a reward</Link>
const MagicalIngredients = () => (
  <Link to={`/rewards#magical-ingredients`}>magical ingredients</Link>
)

/*** OVERVIEW ***/
const Overview = () => (
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
      <h3>The Contract</h3>
      <p>
        Marni is dreaming. She sees herself flying over and under silver seas, weaving among the
        floating islands that populate the skyscape, bursting through drifting whirls of color,
        against a backdrop of stars. Her hair is brilliant white and reaches the length of her body;
        she is dressed in black. She is very old. In the distance, Marni sees a darkness. She thinks
        it is a storm at first, but there is no sky, no stars behind, only void. A hole appears in
        the heavens and begins to grow larger, tumbling in on itself. There is a deafening roar;
        powerful magic rages all around. Marni feels herself being pulled inexorably toward the
        void. She struggles, but she cannot stop her flight. She cannot get away. In a flash of
        color, a mass of swirling, multicolor tendrils appear at the mouth of the abyss and writhe
        toward her. When a tentacle touches her, she wakes up.
      </p>
      <p>
        On awakening from her dream, Marni must make a roll on the{' '}
        <a
          href="https://www.dndbeyond.com/characters/classes/sorcerer#WildMagic"
          rel="noopener noreferrer"
          target="_blank"
        >
          Wild Magic Surge table
        </a>
        .
      </p>
      <p>
        A few days later, a messenger arrives with a contract for Marni from an old family
        acquaintance, <Mayor /> of the famous resort town of <Town />! Apparently, tourists have
        been inexplicably disappearing for months, and the Mayor is offering <MayorsReward /> to
        eliminate the threat. Marni is excited not only to see someone from home but because{' '}
        <Town /> is where the famous <Chef /> lives. Marni invites her Witcher friends to come with
        her.
      </p>
      {/* THE INN */}
      <div>
        <h3>The Inn</h3>
        <p>
          The best-known inn in town is <Inn />. When the party goes there, one of the sister-owners
          notes that yet another pie has gone missing. She blames the local children.
        </p>
        <p>
          If the party tries to make any purchases or stay the night before visiting <TownHall />,
          she refuses their gold and tells them to change their money to Cormyrean golden lions
          first.
        </p>
      </div>
      {/* VISITING THE MAYOR */}
      <div>
        <h3>The Mayor</h3>
        <p>
          If the party goes to <TownHall /> to visit <Mayor />, the adventurers will be stopped by a
          guard and chastised for not having their weapons peace-bonded, as is Cormyrean law. The
          guard supposes they didn't even register at the border garrison!
        </p>
        <p>
          The guard wishes to place the Witchers under arrest, but the <Mayor /> intervenes and
          takes them to his office in <TownHall />. He says he will take care of everything and
          focuses on Marni in particular. He was intrigued to discover that a Moonfoot girl is not
          only a sorceress, but a Witcher! Now that he sees her, Marni reminds him of her Great Aunt
          Peony Brandywood, who used to live in the forest near the Ten Hills and dance with
          Faeries, or something like that. "She wasn't proper folk either!" he chuckles. "She used
          to traipse about the Astral Plane in her Robe of Stars, but we figure she eventually got
          stuck out there." Marni is astonished; she hadn't heard about Aunt Peony before.
        </p>
        <p>
          Turning to the rest of the party, <Mayor /> offers them <MayorsReward /> in exchange for
          completing his contract. According to him, someone has gone missing from the town once a
          month for the past few months, each time around the full moon. This might even have been
          going on for longer, but its hard to keep track of when visitors come and go. Although
          local law enforcement has attempted to find the killer, it has had little luck, and, now
          that the word is out, tourism is on the wane. Victims have disappeared, often from their
          beds, but there have been no broken windows or doors, no blood, and no tracks. There has
          only been a few strands of thick, foul-smelling brown slime left at the scene. <Mayor />{' '}
          does not know who could be responsible, but he suspects the involvement of the <Hag />,
          who lives in a forest a few miles away from town. At the very least, she might be able to
          provide more information. When the party accepts, the Mayor writes up a proof of mercenary
          employment, suggesting that they show it to local law enforcement if they are questioned
          again.
        </p>
        <p>
          The mayor notes that the party can exchange its money for Cormyrean golden lions at the
          till at the end of the hall.
        </p>
        <p>
          As the party leaves <TownHall />, a young woman approaches them and tells them that she
          knows people have been going missing and hopes they will keep an open mind. She says that{' '}
          <Mayor /> blames the <Hag /> for everything that goes wrong in <Town />, so she hopes they
          will not act without proof. She says the <Hag /> actually provides valuable services to
          the people of the town, especially the women. This said, she drops her head and runs away.
        </p>
      </div>
      {/* VISITING THE RESTAURANT */}
      <div>
        <h3>Visiting the Restaurant</h3>
        <p>
          Marni desperately wants to meet <Chef />. His restaurant, <Restaurant />, is open between
          the hours of 5pm and 1am daily. If the party eats there, it will be treated to an
          incredible Heroes' Feast for 10gp each. Marni is in awe and decides that she wants to open
          a restaurant herself, if it can be like <Restaurant />. She begs the waitstaff to see the
          chef.
        </p>
        <p>
          <Chef />, hearing there are Witchers in the restaurant, gladly comes out to greet them and
          is thrilled with Marni's praise. He asks them to come back to a private room and explains
          that, although he hopes to keep his restaurant going, there has always been trouble
          getting his magical ingredients, especially lately. He has even had some prepared dishes
          vanish and ingredient stores go empty. He asks the party if it would be willing to collect
          some ingredients for him. He gives Marni a list of <MagicalIngredients /> to find on their
          travels and offers the adventurers a CHEF'S REWARD if they can bring them and determine
          the source of the magic.
        </p>
        <p>
          As the party leaves <Restaurant />, it is confronted by another of the patrons, who
          follows them out. This is <Officer />, who requires to search their bags and inspect their
          mercenary contract or adventurer's license. If he is contested, he will summon Purple
          Dragons to aid him. When he is satisfied, <Officer /> says strange events of late,
          including the disappearances, have led him to consider adding a Purple Dragons garrison to{' '}
          <Town />, though this would undoubtedly negatively impact tourism by detracting from the
          cozy atmosphere.
        </p>
      </div>
      {/* VISITING THE HAG */}
      <div>
        <h3>Visiting the Enchantress</h3>
        <p>
          When going to visit the <Hag />, there is a pie tin on the road on the way there. Party
          finds her COTTAGE is smoldering.
        </p>
        <p>
          Looking around, party encounters SMALL FEY carrying a few <MagicalIngredients /> and
          assorted prepared MAGICAL RECIPES and other foods.
        </p>
      </div>
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
      {/* VISITING THE CAVE */}
      <h3>Visiting the Cave</h3>
      <p>
        If the party leaves the PORTAL AREA, they can follow nearby paths to the CAVE and encounter
        the <Hag />, who gives her version of events and might even explain her responsibility for
        <MagicalIngredients /> if asked. However, she will be reluctant to admit responsibility for
        the missing tourists.
      </p>
      <p>
        When the party tries to free her, they are attacked again by the FEY GUARDIAN, who explains
        that the <Hag /> performs blood magic and his Mistress abhors her. He says that he does not
        know her plan, but that she cannot be trusted! He will again flee rather than fight to the
        death.
      </p>
      {/* CLOSING THE PORTAL */}
      <h3>Closing the Portal</h3>
      <p>
        If the party frees the <Hag />, she admits that she does what is necessary and will ask that
        either they acquire a human sacrifice for her to complete the barrier between worlds, or
        else stay out of her way while she acquires one that night.
      </p>
      <p>
        If the party acquires a human sacrifice, she takes it, and when they present the person to
        her, the FEY GUARDIAN will fight them to the death.
      </p>
      <p>
        If the party refuses to help the <Hag />, she will go to try to gather a sacrifice herself,
        but the ROYAL OFFICER'S troops will find and arrest her. The <Hag /> will try to defend her
        actions (she was attempting to steal a child through a window) by saying the party
        understands what is at stake and sanction her actions. Therefore, if the party does n ot
        help the <Hag />, they automatically forfeit the <MayorsReward /> and achieve a "Wanted"
        status in town. The party must break her out of the local jail if they want her to complete
        her magic. Then they have to find her a tourist anyway. If they do not break her out of
        jail, she will count as incapacitated.
      </p>
      <p>
        The party (if there is a mage of a high enough level) can itself attempt to perform a spell
        to close the gate itself. Mages can find the <Hag />
        's Blood Magic Tome if they cast True Seeing or otherwise are able to use truesight near the{' '}
        <Hag />
        's burned cottage. The Blood Magic Tome will instruct the mage how to sacrifice a humanoid,
        and *cook >:D * its blood together with certain magical plants, to seal the portal. [This is
        a blatant attempt to make Marni commit human sacrifice.] When the party starts this, the FEY
        GUARDIAN attacks and fights to the death. Since they are nearby the portal, monsters are
        coming out of the portal more rapidly than usual, too. If there is any reason to believe the
        Guards are watching the Witchers (for example, if they allowed the <Hag /> to try to fetch
        her own human sacrifice), those guards might be able to track the Witchers down at this
        moment and attack everybody in sight.
      </p>
    </main>
  </div>
)

const Characters = () => (
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
      a peacock enjoying a pipe.
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

const Outcomes = () => (
  <div>
    <h2>Outcomes</h2>
    <ul>
      <p>
        <li>
          Rescue the <Hag /> and kill the FEY GUARDIAN -> CHEF'S REWARD, CHEF'S BONUS, TOWN SAVED |
          <MayorsReward /> lost | possible FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Kill both the <Hag /> and the FEY GUARDIAN -> TOWN SAVED, CHEF'S REWARD, <MayorsReward />{' '}
          | CHEF'S BONUS LOST | no FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Kill the <Hag /> but not the FEY GUARDIAN -> if within 5 days, <MayorsReward /> | TOWN
          LOST, no CHEF'S REWARD, CHEF'S BONUS LOST | no FUTURE QUEST;
        </li>
      </p>
      <p>
        <li>
          Rescue the <Hag /> and ignore the FEY GUARDIAN -> barrier will temporarily be restored,
          but situation will revert as soon as the party leaves TOWN -> CHEF'S REWARD |{' '}
          <MayorsReward />
          lost, CHEF'S BONUS LOST, TOWN LOST | no FUTURE QUEST
        </li>
      </p>
    </ul>
  </div>
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
