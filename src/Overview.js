import React from 'react'
import marni from './Marni_Portrait.jpg'
import { Inn, Restaurant, Town, TownHall } from './Settings'
import { Banderhobb, Chef, Hag, Mayor, Officer } from './Characters'
import { MagicalIngredients, MayorsReward } from './Rewards'

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
          beds, but there have been no broken windows or doors, no blood, and no tracks. There have
          only been wisps of shadow and a few strands of foul-smelling brown slime left at the
          scene. <Mayor /> does not know who could be responsible, but he suspects the involvement
          of the <Hag />, who lives in a forest a few miles away from town. At the very least, she
          might be able to provide more information. When the party accepts, the Mayor writes up a
          proof of mercenary employment, suggesting that they show it to local law enforcement if
          they are questioned again.
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
        the <Hag />, who gives her version of events and might even explain her responsibility for{' '}
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
        they stay out of the way to allow her <Banderhobb /> to acquire a human sacrifice so she can
        once again close barrier between worlds, or else acquire one themselves.
      </p>
      <p>
        If the party kills the <Banderhobb />, it must acquire a human sacrifice or allow the{' '}
        <Hag /> to collect one herself.
      </p>
      <p>
        If the party acquires a human sacrifice, she takes it, and when they present the person to
        her, the FEY GUARDIAN will fight them to the death.
      </p>
      <p>
        If the party refuses to help the <Hag />, she will go to try to gather a sacrifice herself,
        but <Officer />
        's troops will find and arrest her. The <Hag /> will try to defend her actions (she was
        attempting to steal a child through a window) by saying the party understands what is at
        stake and sanction her actions. Therefore, if the party does not help or kill the <Hag />,
        it automatically forfeits the <MayorsReward /> and achieves a "Wanted" status in town. The
        party must break her out of the local jail if they want her to complete her magic. Then they
        have to find her a tourist anyway. If they do not break her out of jail, she will count as
        incapacitated.
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

export const Outcomes = () => (
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
    <p>
      AUNT PEONY: she says i have been her connection to the material plane for decades since she
      left when I was an infant. she is still trying to find her way back. There is a magical
      disturbance now on the inner planes—feywild and the shadow realms—and she thinks she can use
      it to get back. but not today. I should keep dreaming of her.
      <br />
      my powers come through the astral planes. the thread of the weave she uses to connect to me.
      That is why magic flows right through me. great aunt peony tied the the weave itself around me
      like a bow; that is how we remain connected.
      <br />
      luck as guatdian angel peony WED 10:25 PM More Info... Delete Message minauros has polluted
      weave
      <br />
      purple dragon dont’t like witxhers
    </p>
  </div>
)

export default Overview
