import React from 'react'

import { Inn, Restaurant, Town, TownHall } from './Settings'
import {
  Banderhobb,
  Boy,
  Chef,
  Hag,
  Marni,
  Mayor,
  SmallFey,
  Officer,
  Peony,
  Kraken,
  Woman,
} from './Characters'
import { ChefsReward, MagicalIngredients, MagicalRecipes, MayorsReward, Robe } from './Rewards'

import astral_plane from './img/astral_plane.jpg'
import mayor from './img/mayor.png'
import officer from './img/purple_dragon_officer.png'
import planes from './img/planes.png'
import hag_img from './img/hag.png'

/*** OVERVIEW ***/
const Overview = () => (
  <div className="overview">
    <img alt="The Planes of Existence" src={planes} />
    <header>
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
        Marni is dreaming. She sees herself flying between silver seas above and below, weaving
        among the starry skyscape's floating islands, bursting through drifting whirls of color. Her
        hair is brilliant white and reaches the length of her body; she is dressed in black. In the
        distance, Marni sees a place of darkness. She thinks it is a storm at first, but there is no
        sky, no stars behind, only void. The darkness begins to grow larger, tumbling in on itself.
        The seas above and below flex like magnetic mirrors. A deafening roar, and all is silent;
        time seems to stop. Marni feels herself being pulled inexorably toward the void. She
        struggles, but she cannot stop her flight. She cannot get away. There is a flash of color
        and a deep, inarticulate moan, as if from the throat of space itself. Suddenly everything is
        happening too fast. A mass of swirling, multicolor tendrils appear at the mouth of the abyss
        and writhe toward her. When a tentacle touches her, she wakes up.
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
      <p className="contract">
        A few days later, a messenger arrives with a contract for Marni from an old family
        acquaintance, <Mayor /> of the famous resort town of <Town />! Apparently, tourists have
        been inexplicably disappearing for months, and the Mayor is offering a <MayorsReward /> to
        eliminate the threat. Marni is excited not only to see someone from home but because{' '}
        <Town /> is where the famous <Chef /> lives. Marni invites her Witcher friends to come with
        her.
      </p>
      {/* THE INN */}
      <div>
        <h3>The Inn</h3>
        <p>
          The party arrives in <Town /> in the evening. The best-known inn in town is <Inn />, which
          would be recommended by local pedestrians. The party would be able to eat and drink there,
          listen to some rousing music by a visiting bard named Mahogany Deku, and get tourist
          advice from the inn's owners, Zoe and Che. If asked, the innkeepers would recommend the
          party visit the Goodberry Grove, which is a patch of magical berries (similar to those
          created by the{' '}
          <a
            href="https://www.dndbeyond.com/spells/goodberry"
            rel="noopener noreferrer"
            target="_blank"
          >
            Goodberry
          </a>{' '}
          spell) and tended by local druids. A magical spring wells from the center of the grove and
          infuses the patch with magic, producing unique crops and giving the town its name. The
          innkeepers can also provide maps of faerie circles in the area, which are quite old. Local
          folklore is filled with mentions of visits from the Fey realm!
        </p>
        <p>
          If the party tries to make any purchases or stay the night before visiting <TownHall />,
          the innkeepers refuse their gold and tell them to change their money to Cormyrean golden
          lions at the <TownHall /> first. They'll keep a tab open for the evening since the party
          is already settling in, and it's too late to change money.
        </p>
        <p>
          In the morning, when the party goes downstairs, there is a pall over the place. A couple
          of Cormyrean Purple Dragons are speaking with a worried-looking couple. One of the guests,
          a little boy named <Boy />, has gone missing! If pressed, the innkeepers will admit he's
          not the first. The Witchers can explore the empty room if they wish, but they'll find
          nothing but (on a decent investigation check) a few strands of shadow and some
          foul-smelling, brown slime. The boy's room was on the second floor, and there were no
          witnesses. The boy disappeared while his parents slept in the room!
        </p>
      </div>
      {/* VISITING THE MAYOR */}
      <div>
        <h3>The Mayor</h3>
        <p>
          When the party goes to <TownHall /> to visit <Mayor />, the adventurers are stopped by{' '}
          <Officer /> and chastised for not having their weapons peace-bonded, as is Cormyrean law.
          He supposes they didn't even register at the border garrison! <Officer /> explicitly
          distrusts Witchers and requires to search their bags and inspect their mercenary contract
          or adventurer's license. If he is contested, he will summon Purple Dragons to aid him.
          Even if they cooperate, the officer wishes to place the Witchers under arrest on suspicion
          of connection with <Boy />
          's disappearance.
        </p>
        <p className="mayor">
          <img alt="The Mayor" src={mayor} />
          Fortunately, the <Mayor /> intervenes and takes the party to his office in <TownHall />.
          He says he will take care of everything and focuses on Marni in particular. He was stunned
          to discover that a Moonfoot girl is not only a sorceress, but a Witcher! Now that he sees
          her, Marni reminds him of her Great Aunt Peony Brandywood, who used to live in the forest
          near the Ten Hills and dance with faeries, or something like that. "She wasn't proper folk
          either!" he chuckles. "She'd go missing for days on end traipsing about the Astral Plane!
          One day, she disappeared and never came back. Good riddance, we thought." Marni is
          astonished; she hadn't heard about Aunt Peony before. The Mayor admits that he has no idea
          why he thought to write Marni about the disappearances and seems shocked when he asks how
          much money he offered. (Perceptive characters might suspect he's been under the influence
          of a{' '}
          <a
            href="https://www.dndbeyond.com/spells/suggestion"
            rel="noopener noreferrer"
            target="_blank"
          >
            Suggestion
          </a>{' '}
          spell.)
        </p>
        <p>
          Turning to the rest of the party, <Mayor /> notes that they might as well investigate.
          According to him, there had been rumors of tourists going missing for years, but they'd
          always been hushed up and were never investigated by his predecessors. It's hard to keep
          track of when visitors come and go, and the Purple Dragons always have their hands full.
          There have never been broken windows or doors, blood, or tracks to work with.
        </p>

        <p>
          <Mayor /> does not know who could be responsible. He suggests they consult the druids down
          at Goodberry Grove, though he considers them above reproach. If that fails, the Witchers
          could consult the <Hag />, who lives in a forest a few miles away from town and mostly
          keeps to herself. At the very least, she might be able to provide more information. When
          the party accepts, the Mayor writes up a proof of mercenary employment, suggesting that
          they show it to local law enforcement if they are questioned again.
        </p>
        <p>
          The mayor notes that the party can exchange its money for Cormyrean golden lions at the
          till at the end of the hall.
        </p>
        <p>
          As the party leaves <TownHall />, a <Woman /> approaches them and tells them that she
          heard there were Witchers in town and hopes they will keep an open mind. She says that{' '}
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
          incredible Heroes' Feast for 10gp each. Marni is in awe and decides that, once her Wild
          Magic is under control, she's going to pursue her dream of owning a restaurant herself.
          She begs the waitstaff to see the chef.
        </p>
        <p>
          <Chef />, hearing there are Witchers in the restaurant, gladly comes out to greet them and
          is thrilled with Marni's praise. He asks them to come back to the kitchen and explains
          that, although he hopes to keep his restaurant going, there has always been trouble
          getting his magical ingredients, especially lately. There are claw marks on some of the
          cupboards! He has even had some prepared dishes vanish and ingredient stores go empty. He
          asks the party if it would be willing to collect some ingredients for him. He gives Marni
          a list of <MagicalIngredients /> to find on their travels and offers the adventurers a{' '}
          <ChefsReward /> if they can bring them and determine the source of the magic.
        </p>
        <p className="officer">
          <img alt="Purple Dragon Officer" src={officer} />
          As the party leaves <Restaurant />, it is confronted by another of the patrons, who
          follows them out. This is <Officer />, who explicitly distrusts Witchers and requires to
          search their bags and inspect their mercenary contract or adventurer's license. If he is
          contested, he will summon Purple Dragons to aid him. When he is satisfied, <Officer />{' '}
          says strange events of late, including the disappearances, have led him to consider adding
          a Purple Dragons garrison to <Town />, though this would undoubtedly negatively impact
          tourism by detracting from the cozy atmosphere. <Officer /> advises the party to finish
          its business quickly and get out of <Town />.
        </p>
      </div>

      {/* VISITING THE HAG */}
      <div>
        <h3>Visiting the Enchantress</h3>
        <p>
          When going to visit the <Hag />, there is a pie tin on the road on the way there. Party
          finds her cottage is smoldering.
        </p>
        <p>
          Looking around, the party encounters a <SmallFey /> carrying a few <MagicalIngredients />{' '}
          and assorted prepared <MagicalRecipes /> and other foods.
        </p>
      </div>
      <p>
        Soon after the <SmallFey /> encounter, if the party continues to explore the nearby area,
        they will roll for FEY ENCOUNTER and discover a PORTAL beyond.
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
      {/* ENTERING THE PORTAL */}
      <h3>Entering the Portal</h3>
      <p>
        If a member of the party enters the portal, it will encounter an area that appears
        distorted. Spells cast roll 1d4, yielding one of the following results:
      </p>
      <ol>
        <li>Dead Magic (the spell fizzles)</li>
        <li>Wild Magic (the spell works but forces a roll on the Wild Magic table)</li>
        <li>The spell functions normally</li>
        <li>Reroll</li>
      </ol>
      <p>
        Things happen for no reason. Some things are ethereal. Some things are fluorescently colored
        and glow. Creatures are abominations, etc.
      </p>
      <p>
        With a little walking, the party can find Marni's Aunt Peony. Peony tells them to get the
        fuck out! This whole world's collapsing. But if the party rescues her from the{' '}
        <a
          href="https://www.dndbeyond.com/homebrew/creations/monsters/159667-planar-kraken/edit"
          rel="noopener noreferrer"
          target="_blank"
        >
          Planar Kraken
        </a>
        , Aunt Peony will leave with them and give Marni her Cloak of Stars. She will also be able
        to close the portal after she gets some rest... ?
      </p>
      {/* VISITING THE CAVE */}
      <h3>Visiting the Cave</h3>
      <p>
        The party can follow nearby paths to the CAVE. As the party proceeds through the cave, it
        catches sight of a <Hag /> in a cave room. She looks concerned. The <Banderhobb /> attacks.
        The party may then approach the <Hag />. She will beg the Witchers not to attack!
      </p>
      <p className="hag">
        <img alt="Green Hag" src={hag_img} />
        If she is allowed to speak, the <Hag /> will explain that she has been trying to firm a
        weakness in the boundaries among the planes. The gods and evil ones, fey and shadow, usually
        have dominion over their own realms, but the transitive planes among them&mdash;the Astral
        and Ethereal Planes&mdash;have become poisoned. Where there should be one door, there are
        multitudes. The <Hag /> mourns the death of her <Banderhobb />. She says that the beauty of{' '}
        <Town /> ultimately stems from the thin barriers between it and the Feywild; the town's
        glorious natural attractions are, in fact, not of this world. (Even down to the magical
        plants that <Chef /> uses at his restaurant!). However, that fact has made <Town /> more
        susceptible to the troubles taking root in She explains that blood sacrifice has been
        necessary to staunch the invasion of Fey since the barriers among worlds have been weakening
        even further of late. She knows no other way. Though she plays only a small part in
        preventing it, <Hag /> says that if the planes collapse into one another, the end is a
        juxtaposition of all things, a multiverse of chaos and the collision of the planes.
      </p>
      <p>
        If the <Hag /> is killed, the party will find her Blood Magic Tome in the cave, which
        includes notes in the margin that outline the information above as well as the rites to
        permanently seal a portal with a human sacrifice.
      </p>
      {/* CLOSING THE PORTAL */}
      <h3>Closing the Portal</h3>
      <h4>If the Hag Is Alive...</h4>
      <p>
        If the <Hag /> is alive, she will request the party bring her a human sacrifice so she can
        close the portal. The party can go into town and use whatever means are at its disposal to
        capture a sacrificial victim while avoiding Purple Dragon patrols.
      </p>
      <ul>
        <li>
          <h5>Kidnapping a tourist</h5>
          <p>
            If the party acquires a human sacrifice undetected, the <Hag /> takes it and asks them
            to leave the cave. The portal soon closes. The <MayorsReward /> becomes unavailable, as
            yet another tourist just went missing, and there is no evidence the abductions will
            stop. Additionally, <Officer /> takes an opportunity to sneer at the Witchers for their
            ineffectiveness and suggests they get out of town soon if they know what's good for
            them.
          </p>
          <p>
            This course of action would be extremely distressing to <Marni /> and might affect her
            future development.
          </p>
        </li>
        <li>
          <h5>Refusing to kidnap</h5>
          <p>
            The party may refuse to help the <Hag /> find another victim but leave her alive and
            mobile. In this case, she will go to try to gather a sacrifice herself if she is not
            convinced that the Witchers have a better plan. However, <Officer />
            's troops will find and arrest her. The <Hag /> will try to defend her actions (she was
            attempting to steal a child through a window) by saying the party understands what is at
            stake and sanctions her actions. The party achieves a "Wanted" status in town, meaning
            it will be pursued and attacked by Purple Dragons, and must break the <Hag /> out of the
            jail in the basement of <TownHall /> and find her a sacrifice if it wants her to
            complete her magic.
          </p>
        </li>
      </ul>
      <h4>If the Hag is Dead...</h4>
      <p>
        If the <Hag /> has been killed or incapacitated, the party should find some other way of
        closing the PORTAL or risk losing the town. There are at least two ways to do this.
      </p>
      <ul>
        <li>
          <h5>Using blood magic</h5>
          <p>
            A mage in the party itself can attempt to perform a spell to close the PORTAL using the
            Blood Magic Tome discovered in the CAVE. The Blood Magic Tome will instruct the mage how
            to sacrifice a humanoid, and cook its blood together with certain magical plants to seal
            the portal. If the party starts this in the CAVE, it is seen by the YOUNG WOMAN, who has
            come to check on the <Hag />. If she gets back to the <Town />, she will inform{' '}
            <Officer /> of the Witchers' activities, and they will suffer a "Wanted" status in town
            and lose access to the <MayorsReward />.
          </p>
          <p>
            This course of action would be extremely distressing to <Marni /> and might affect her
            future development.
          </p>
        </li>
        <li>
          <h5>Invading the portal</h5>
          <p className="invasion">
            <img alt="astral plane" src={astral_plane} />
            This is the "good" course of action but also the most dangerous. If the party wants, it
            can invade the PORTAL. There, it will eventually find <Peony /> and the <Kraken />. The
            party can go home once it defeats the <Kraken />, heads held high&mdash;so long as they
            escape the realm before the portal collapses. The Mayor will suppose they deserve{' '}
            <MayorsReward />.
          </p>
          <p>
            <Peony /> shares her background with Marni. She also provides a notable{' '}
            <em>mea culpa</em>: On the day Marni was born, Peony visited her sister and saw the
            infant, and then she teleported to the Astral Plane, where she had ongoing research.
            This time, a Githyanki mage who had a crush on her cast a <em>geas</em> that prevented
            her from ever trying to leave the Astral Plane as long as he was there. In the decades
            that followed, she thought constantly about her home&mdash;specifically about Marni, her
            only niece, whom she remembered vividly. Marni was the focus of Peony's frequent magical
            struggles and pleas to various entities to break the <em>geas</em> and return home,
            which must have made a magical connection between them. Maybe something rubbed off on
            Marni from one plane or other&mdash;no telling which! But, no doubt about it, Marni's
            got a thread of the weave tied around her like a bow. <Peony /> figures either something
            about the <Kraken /> broke the <em>geas</em>, or that Githyanki mage is somewhere on
            Toril. Either way, Peony kisses the Prime's sweet ground.
          </p>
          <p>
            <Peony /> warns the party that the followers of Garagos, a Demi-God of War and
            Destruction, are trying to not only raise him to Godhood,sB destruction of the planes,
            in a wild war of all on all. They unleashed the <Kraken /> from Pandemonium itself!
          </p>
          <p>
            For her part, however, <Peony /> is through adventuring and intends to go back to the
            Ten Hills and die quietly in her bed. She gives <Marni /> a <Robe /> and wishes her good
            luck saving the multiverse.
          </p>
        </li>
      </ul>
      <p>
        If the party successfully earns the <MayorsReward />, <Mayor /> will try and haggle it down
        a bit before paying up.
      </p>
    </main>
  </div>
)

export default Overview
