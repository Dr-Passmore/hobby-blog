---
slug: steam-game-recommendation
title: Developing a Steam Game Recommendation System
description: Using Python to create a game recommendation system
authors: passmore
tags: [Python, Natural Language Processing, API, MySql, Recommendation]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp
draft: true
---



<!--truncate-->

## Overview



## Challenges

Creating a recommendation system has several challenges. All data is being brought in using the Steam API. Initially, I planned to build a recommender which included Steam Store user tags. However, this information is not accessible through the API. When I hit the first challenge, I considered using game genres as part of the recommendation system. This gave me the first issue of ambigious genres.

### Ambigious genres

Unlike music, movies and books, video games have terrible genre labels. While all mediums has media that lacks clear genres, video games, in particular, present unique challenges due to the lack of standardised genre labelling. This ambiguity in genre classification can hinder the effectiveness of a recommendation system. Out of 933 games listed in my `game_details` table, 488 use the genre tag of `Action` with 121 only using the `Action` tag.

The `Action` tag is applied to everything from first-person shooters such as `Doom` to Puzzle Platform games including `Escape Goat`. Unfortunately, this essentially makes the genre tag from Steam to be worthless for use in the recommendation system.

#### Alien Vs Preditor

In addtion, you also have games that blend genres. During this project I noticed I owned the `Alien Vs Preditor`[AVP] game which actually highlights the challenge. AVP has three campaigns:

1. Alien Campaign - Action/Puzzle - Normally break certain things and learn the map to identify routes that bypass turrets etc
2. Marine Campaign - Action/Horror - Complete objectives and avoid being killed by waves of aliens. Instant death by face hugger jump scare.
3. Preditor Campaign - Action/First Person Shooter - Slaughter your way through the campaign, with some occassional platforming.

All three have very different experiences and play significantly differently from each other.

### Bias

Bias is a key issue as the key factors used in selecting the games will result in similar games being suggested. This has the potential to overlook certain genres of games. If I used just completed games, I would more likely get recommendations for short indie games. Due to the short playtime of a lot of indie games it could possibly introduce bias towards them. In contrast, selecting games on playtime puts far greater weight on `Strategy` and `Role Playing Games`, which are frequently designed to provide very long campaigns. For example, the excellent puzzle game `Pony Island` by `Daniel Mullins Games` only provides about 2 hours of content, in contrast `Total War`games can provide hundreds of hours of entertainment.

## Building the recommendation system

### System 1: Completed Games

### System 2: Most played games

### System 3: Random Selection of unplayed

## Results and Evaluation

Initially, I found both completed and Most Played games were not behaving as expected. I was using comparison betweek `detailed descriptions` and a key problem I found was the low quality of some of the games being recommended. This was primarily an issue with the `Completed Games` based recommendation. For example, using the recommendation system on `Most Played Games` it was providing recommendations of primarily Total War games and other Strategy games. In comparison, the `Completed Games` recommendation was `Thunder Wolves` a short arcade helicopter game with a frustrating attempt to copy the style of the 2004 film `Team America: World Police`. Essentially, the game was not particularly enjoyable and I initially thought this was due to `Completed Games` being more likely to include short games. However, the following recommendation was worse `Agricultural Simulator 2013` with a *Mostly Negative* score on Steam.

As a result I evalutated the detailed descriptions and found that a lot of smaller games had developers linking their other games in the descriptions.

Agricultural Simulator 2013:

```html
<h1>Partner Highlights</h1><p><a href="https://store.steampowered.com/app/1515320/Harvest_Days/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/1515320/Harvest_Days/</a><br><br><a href="https://store.steampowered.com/app/1380220/Starsand/" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/1380220/Starsand/</a><br><br><a href="https://store.steampowered.com/app/1129580/Medieval_Dynasty/" target="_blank" rel=""  id="dynamiclink_2" >https://store.steampowered.com/app/1129580/Medieval_Dynasty/</a><br><br><a href="https://store.steampowered.com/app/1329880/Wild_West_Dynasty/" target="_blank" rel=""  >https://store.steampowered.com/app/1329880/Wild_West_Dynasty/</a><br><br><a href="https://store.steampowered.com/app/968970/Lumberjacks_Dynasty/" target="_blank" rel=""  >https://store.steampowered.com/app/968970/Lumberjacks_Dynasty/</a></p><br><h1>About the Game</h1>Best In Farming!<br><br>An idyllic farming environment surrounded by inviting &amp; untilled mountain panoramas set in the beautiful landscapes of Tuscany, The Alps and USA await all fans of the Agricultural Simulator series.<br><br>At their own farm hobby-farmers undertake the daily tasks and challenges of a professional: The production of food, sustainable resources and delivery of eco products all have to be managed.<br><br>Fields have to be worked and farm animals cared for. The dynamic ground makes the whole game more realistic! Future farmers have to invest tactically and with foresight – the rapid spend of budgets by running costs and seed bills must not be underestimated. To realize a profit takes financial and tactical skill.<h2 class="bb_tag">Key Features</h2><br><ul class="bb_ul"><li>Including  Interactive Tutorial<br></li><li>Includes 4 Maps<br></li><li>Includes more than 100 machines<br></li><li>Free placeable building including:<br><ul class="bb_ul"><li>Solar Energy Plant<br></li><li>Greenhouse<br></li><li>Windmills<br></li><li>Dung Tank </li></ul></li><li>	Extensive Help System, including Transport tasks<br></li><li>	6 different animal species</li></ul>
```

Thunder Wolves:

```html
<h1>check out this upcoming game</h1><p><a href="https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/</a></p><br><h1>MORE Shooting Fun</h1><p><table>    <tr>        <th><a href="https://store.steampowered.com/app/241760/Kill_to_Collect/" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/241760/Kill_to_Collect/</a></th>        <th><a href="https://store.steampowered.com/app/299480/Rogue_Stormers/" target="_blank" rel=""  id="dynamiclink_2" >https://store.steampowered.com/app/299480/Rogue_Stormers/</a></th>    </tr></table><a href="https://store.steampowered.com/app/606730/Sine_Mora_EX/" target="_blank" rel=""  >https://store.steampowered.com/app/606730/Sine_Mora_EX/</a></p><br><h1>About the Game</h1>When this “wolf pack” strikes, you hear the thunder roll. The Thunder Wolves attack from the air. They are mercenaries, and the best helicopter pilots in the world. Every one of them is ready for action at all times—and ready to fight evil, wherever it lurks.  <br><br><br>The Thunder Wolves have already made it through countless battles. They are equipped to destroy their enemies—destruction is part of their business. Put yourself in the pilot’s seat of a combat helicopter and become a member of the most experienced and dangerous helicopter team in the world!<br><br><br>Support the Thunder Wolves in their global battle against terrorism. Take part in varied operations and do whatever it takes to thwart the diabolical plans of your enemies! Defeat them once and for all, and save the world!<h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li> Experience furious helicopter action in this relentless, adrenaline (and lead) pumped arcade shooter! <br></li><li> Make use of 9 different helicopters, as well as a large arsenal of different weapons, and let your appetite for destruction have free reign! <br></li><li> Master 13 action-packed missions in 4 different regions of the world! <br></li><li> Vanquish masses of enemies, fulfill varied mission objectives, and fight your way through to spectacular boss battles! <br></li><li> Fly together with a friend as pilot and gunner in local co-op mode!</li></ul><br><a href="https://store.steampowered.com/app/232970/Thunder_Wolves/" target="_blank" rel=""  >https://store.steampowered.com/app/232970/Thunder_Wolves/</a>
```

To resolve this the analsysis of the detailed descriptions needs to ignore the Steam URLs as this is impacting the simularity scores, and significantly undermining the `Completed Games` recommendation quality.

### Fixing

To resolve this I had to add custom stopwords as this enables ignoring the URLs to other games in the Steam store and other generic words relating to games.

### Random Selection

The first random selection was a game called `Carrion`. Very enjoyable, but actually highlighted the a key issue with the use of the detailed description. The detailed description for `Carrion` is simply:

```html
<strong>CARRION</strong> is a reverse horror game in which you assume the role of an amorphous creature of unknown origin. Stalk and consume those that imprisoned you to spread fear and panic throughout the facility. Grow and evolve as you tear down this prison and acquire more and more devastating abilities on the path to retribution.
```

Essentially, does not contain much more detail than the short description:

```html
CARRION is a reverse horror game in which you assume the role of an amorphous creature of unknown origins, stalking and consuming those that imprisoned you.
```

I would describe `Carrion` as a puzzle game with theme of playing as the monster. Essentially, feels like a cross between `The Thing` and `The Blob`. Therefore, very unlikely to be recommended by either the completed games or most played games recommenders due to the description not reflecting the gameplay genre.

The random selection does provide the advantage of being able to select gems that would not be selected from the detailed descriptions, but at the same time it also has a risk of selecting an awful game.

## Conclusion

