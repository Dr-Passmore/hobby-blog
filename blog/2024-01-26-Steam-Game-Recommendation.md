---
slug: steam-game-recommendation
title: Developing a Game Recommendation System
description: Using Python I have tested different methods to create a game recommendation system
authors: passmore
tags: [Python, Natural Language Processing, API, MySql]
image: https://personalblogimages.blob.core.windows.net/websiteimages/Falmouthallotmentspreview.webp
draft: true
---



<!--truncate-->

## Overview



## Challenges

Creating a recommendation system has several challenges. All data is being brought in using the Steam API. Initially, I planned to build a recommender which included Steam Store user tags. However, this information is not accessible through the API. When I hit the first challenge, I considered using game genres as part of the recommendation system.   

### Ambigious genres

Unlike music, movies and books, video games have terrible genre labels. While all mediums has media that lacks clear genres, video games, in particular, present unique challenges due to the lack of standardised genre labelling. This ambiguity in genre classification can hinder the effectiveness of a recommendation system.  

#### Alien Vs Preditor

You also have games that blend genres. During this project I noticed I owned the `Alien Vs Preditor`[AVP] game which actually highlights the challenge. AVP has three campaigns:

1. Alien Campaign - Action/Puzzle - Normally break certain things and learn the map to identify routes that bypass turrets etc
2. Marine Campaign - Action/Horror - Complete objectives and avoid being killed by waves of aliens. Instant death by face hugger jump scare. 
3. Preditor Campaign - Action - Shoot your way through the campaign, occassional platform jumps. 

All three have very different experiences and play significatnly differently from each other.   

### Bias

Bias is a key issue as the key factors used in selecting the games will result in similar games being suggested. This has the potential to overlook certain genres of games. If I used just completed games, I would more likely get recommendations for short indie games. Due to the short playtime of a lot of indie games it could possibly introduce bias towards them. In contrast, selecting games on playtime puts far greater weight on strategy and Role Playing Games, which are frequently designed to provide very long campaigns. For example, the excellent puzzle game `Pony Island` by `Daniel Mullins Games` only provides about 2 hours of content, in contrast `Total War`games can provide hundreds of hours of entertainment. 

## Building the recommendation system

### System 1: Completed Games

### System 2: Most played games

### System 3: Random Selection of unplayed

## Results and Evaluation

Initially, I found both completed and Most Played games were not behaving as expected. I was using comparison betweek `detailed descriptions` and a key problem I found was the low quality of some of the games being recommended. To resolve this I had to add custom stopwords as I noticed the poor quality games being recommended had been including large numbers of URLs to other games in the Steam store.  

### Random Selection

The first random selection was a game called `Carrion`. Very enjoyable, but actually highlighted the a key issue with the use of the detailed description. The detailed description for `Carrion` is simply:


```

```

Therefore, very unlikely to be recommended by either the completed games or most played games recommenders. 

## Conclusion 

