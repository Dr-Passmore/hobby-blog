---
slug: steam-game-recommendation
title: Developing a Steam Game Recommendation System
description: Using Python to create a game recommendation system
authors: passmore
tags: [Python, Natural Language Processing, API, MySql, Recommendation]
image: https://personalblogimages.blob.core.windows.net/websiteimages/game-recommender.webp
draft: true
---

Building a game recommendation system proved to be an interesting experience. Thanks to many years of Steam sales and Humble Bundles, I have built up a significant backlog of videogames. However, games are difficult to put into clear categories and frequently depend on common game mechanics.  

![Insert Soul](https://personalblogimages.blob.core.windows.net/websiteimages/game-recommender.webp)

<!--truncate-->

## Overview

To build the game recommendation system I need to first 

## Challenges

Creating a recommendation system has several challenges. All data is being brought in using the Steam API. Initially, I planned to build a recommender which included Steam Store user tags. However, this information is not accessible through the API. When I hit the first challenge, I considered using game genres as part of the recommendation system. This gave me the first issue of ambiguous genres.

### Ambigious genres

Unlike music, movies, and books, video games have terrible genre labels. While all media lack clear genres, video games, in particular, present unique challenges due to the lack of standardised genre labelling. This ambiguity in genre classification can hinder the effectiveness of a recommendation system. Out of 933 games listed in my `game_details` table, 488 use the genre tag of `Action`, with 121 only using the `Action` tag.

The `Action` tag is applied to everything from first-person shooters such as `Doom` to Puzzle Platform games including `Escape Goat`. Unfortunately, this essentially makes the genre tag from Steam worthless for use in the recommendation system.

#### Alien Vs Predator

In addition, you also have games that blend genres. During this project, I noticed I owned the `Alien Vs Predator`[AVP] game, which highlights the challenge to define a games genre. AVP has three campaigns:

1. Alien Campaign - Action/Puzzle - Normally break certain things and learn the map to identify routes that bypass turrets etc
2. Marine Campaign - Action/Horror - Complete objectives and avoid being killed by waves of aliens. Instant death by face hugger jump scares.
3. Predator Campaign - Action/First Person Shooter - Slaughter your way through the campaign, with some occasional platforming.

All three have very different experiences and play significantly differently from each other. 

### Bias

Bias is a crucial issue as the critical factors used in selecting the games will result in similar games being suggested. This has the potential to overlook specific genres of games. If I used just completed games, I would more likely get recommendations for short indie games. The short playtime of many indie games could introduce a bias towards them. In contrast, selecting games on playtime puts far greater weight on `Strategy` and `Role Playing Games`, which are frequently designed to provide very long campaigns. For example, the excellent puzzle game `Pony Island` by `Daniel Mullins Games` only provides about 2 hours of content; in contrast `Total War` games can provide hundreds of hours of entertainment.

## Building the recommendation system

### System 1: Completed Games

### System 2: Most played games

### System 3: Random Selection of unplayed

This is the simplist of the three systems. It queries the MySQL database for games and creates a data frame where it will randomly select from a list of unplayed games. If it finds no games with 0 minutes played it will then pick the game with the lowest playtime. 

The games it selects eliminates anything that has been logged as either broken, completed, or previously selected. 

```python
def uncompletedgames(self):
        query = '''SELECT * FROM steamdata.owned_games
            WHERE Completed = 0 AND Broken = 0 AND ENDLESS = 0 AND selected = 0;'''
        return self.query_data(query)
```

One the data is provided it is converted into a data frame and an additional query is made to the game_details table.

```python
def gamedetails(self):
        query = 'SELECT * FROM steamdata.game_details;'
        return self.query_data(query)
```

The additional details are left joined on the `Game ID`. This enables the selected game to have full details avalible in the output.

```python
 def neverPlayedSelection(self):
        df = self.uncompletedgames()
        df_details = self.gamedetails()
        df = pd.merge(df, df_details, on='Game ID', how='left')
        zero_minutes_games = df[df['Playtime (forever)'] == 0] 
        if not zero_minutes_games.empty:
            # Randomly pick one game with zero minutes played
            random_game = zero_minutes_games.sample()
        else:
            # Pick the game with the lowest minutes played
            random_game = df.loc[df['Playtime (forever)'].idxmin()]
        return random_game
```

This system will output a random game which has no minutes or very limited playtime recorded by Steam. 

## Results and Evaluation

Initially, I found that both completed and most played games were not behaving as expected. I was using the comparison between `detailed descriptions`, and a key problem I found was the low quality of some of the games being recommended. This was primarily an issue with the `Completed Games` based recommendation. For example, using the recommendation system on `Most Played Games` provided recommendations of primarily Total War games and other Strategy games. In comparison, the `Completed Games` recommendation was `Thunder Wolves`, a short arcade helicopter game that was a frustrating attempt to copy the style of the 2004 film `Team America: World Police`. Essentially, the game was not particularly enjoyable, and I initially thought this was due to `Completed Games` being more likely to include short games. However, the following recommendation was worse: `Agricultural Simulator 2013` with a *Mostly Negative* score on Steam.

As a result, I evaluated the detailed descriptions and found that many smaller games had developers linking their other games in the descriptions.

Agricultural Simulator 2013:

```html
<h1>Partner Highlights</h1><p><a href="https://store.steampowered.com/app/1515320/Harvest_Days/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/1515320/Harvest_Days/</a><br><br><a href="https://store.steampowered.com/app/1380220/Starsand/" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/1380220/Starsand/</a><br><br><a href="https://store.steampowered.com/app/1129580/Medieval_Dynasty/" target="_blank" rel=""  id="dynamiclink_2" >https://store.steampowered.com/app/1129580/Medieval_Dynasty/</a><br><br><a href="https://store.steampowered.com/app/1329880/Wild_West_Dynasty/" target="_blank" rel=""  >https://store.steampowered.com/app/1329880/Wild_West_Dynasty/</a><br><br><a href="https://store.steampowered.com/app/968970/Lumberjacks_Dynasty/" target="_blank" rel=""  >https://store.steampowered.com/app/968970/Lumberjacks_Dynasty/</a></p><br><h1>About the Game</h1>Best In Farming!<br><br>An idyllic farming environment surrounded by inviting &amp; untilled mountain panoramas set in the beautiful landscapes of Tuscany, The Alps and USA await all fans of the Agricultural Simulator series.<br><br>At their own farm hobby-farmers undertake the daily tasks and challenges of a professional: The production of food, sustainable resources and delivery of eco products all have to be managed.<br><br>Fields have to be worked and farm animals cared for. The dynamic ground makes the whole game more realistic! Future farmers have to invest tactically and with foresight – the rapid spend of budgets by running costs and seed bills must not be underestimated. To realize a profit takes financial and tactical skill.<h2 class="bb_tag">Key Features</h2><br><ul class="bb_ul"><li>Including  Interactive Tutorial<br></li><li>Includes 4 Maps<br></li><li>Includes more than 100 machines<br></li><li>Free placeable building including:<br><ul class="bb_ul"><li>Solar Energy Plant<br></li><li>Greenhouse<br></li><li>Windmills<br></li><li>Dung Tank </li></ul></li><li> Extensive Help System, including Transport tasks<br></li><li>   6 different animal species</li></ul>
```

Thunder Wolves:

```html
<h1>check out this upcoming game</h1><p><a href="https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/" target="_blank" rel=""  id="dynamiclink_0" >https://store.steampowered.com/app/1266060/Lethal_Honor__Order_of_the_Apocalypse/</a></p><br><h1>MORE Shooting Fun</h1><p><table>    <tr>        <th><a href="https://store.steampowered.com/app/241760/Kill_to_Collect/" target="_blank" rel=""  id="dynamiclink_1" >https://store.steampowered.com/app/241760/Kill_to_Collect/</a></th>        <th><a href="https://store.steampowered.com/app/299480/Rogue_Stormers/" target="_blank" rel=""  id="dynamiclink_2" >https://store.steampowered.com/app/299480/Rogue_Stormers/</a></th>    </tr></table><a href="https://store.steampowered.com/app/606730/Sine_Mora_EX/" target="_blank" rel=""  >https://store.steampowered.com/app/606730/Sine_Mora_EX/</a></p><br><h1>About the Game</h1>When this “wolf pack” strikes, you hear the thunder roll. The Thunder Wolves attack from the air. They are mercenaries, and the best helicopter pilots in the world. Every one of them is ready for action at all times—and ready to fight evil, wherever it lurks.  <br><br><br>The Thunder Wolves have already made it through countless battles. They are equipped to destroy their enemies—destruction is part of their business. Put yourself in the pilot’s seat of a combat helicopter and become a member of the most experienced and dangerous helicopter team in the world!<br><br><br>Support the Thunder Wolves in their global battle against terrorism. Take part in varied operations and do whatever it takes to thwart the diabolical plans of your enemies! Defeat them once and for all, and save the world!<h2 class="bb_tag">Key Features</h2><ul class="bb_ul"><li> Experience furious helicopter action in this relentless, adrenaline (and lead) pumped arcade shooter! <br></li><li> Make use of 9 different helicopters, as well as a large arsenal of different weapons, and let your appetite for destruction have free reign! <br></li><li> Master 13 action-packed missions in 4 different regions of the world! <br></li><li> Vanquish masses of enemies, fulfill varied mission objectives, and fight your way through to spectacular boss battles! <br></li><li> Fly together with a friend as pilot and gunner in local co-op mode!</li></ul><br><a href="https://store.steampowered.com/app/232970/Thunder_Wolves/" target="_blank" rel=""  >https://store.steampowered.com/app/232970/Thunder_Wolves/</a>
```

To resolve this, the analysis of the detailed descriptions needs to ignore the Steam URLs as this is impacting the similarity scores and significantly undermining the `Completed Games` recommendation quality.

### Fixing

To resolve this, I had to add custom stopwords, which enable me to ignore the URLs to other games in the Steam store and other generic words related to games.

### Random Selection of unplayed

The first random selection was a game called `Carrion`. Very enjoyable but highlighted the key issue with the use of the detailed description. The detailed description for `Carrion` is:

```html
<strong>CARRION</strong> is a reverse horror game in which you assume the role of an amorphous creature of unknown origin. Stalk and consume those that imprisoned you to spread fear and panic throughout the facility. Grow and evolve as you tear down this prison and acquire more and more devastating abilities on the path to retribution.
```

Essentially, does not contain much more detail than the short description:

```html
CARRION is a reverse horror game in which you assume the role of an amorphous creature of unknown origins, stalking and consuming those that imprisoned you.
```

I would describe `Carrion` as a puzzle game with theme of playing as the monster. Essentially, feels like a cross between `The Thing` and `The Blob`. Therefore, very unlikely to be recommended by either the completed games or most played games recommenders due to the description not reflecting the gameplay genre, and providing very few words for the similarity score. 

The random selection of unplayed does provide the advantage of being able to select gems that would not be selected from the detailed descriptions, but it also carries the risk of selecting an awful game. Unfortunately, with the nature of bundle deals from Humble Bundle there is likely quite a decent number of terrible games that have never been played.

## Conclusion


