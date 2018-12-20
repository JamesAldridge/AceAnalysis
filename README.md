# Web Application Development Assignment 2 - AceAnalysis Design Document/README.
Name: James Aldridge
Student Number: 20071749

## About.

AceAnalysis is a poker analytics web application that allows a user to access a information about poker including statistics about the game, how to exploit these statistics and information about live events and online tournaments. The app features a poker database with a collection of players detailing statistics about how they play, this is useful as by knowing these statistics, the user could exploit other players tendencies by knowing the way they play. Users can add and remove from this collection of players. Additionaly there is a Tournaments collection where players can filter and find tournaments that meet the structure they like, they can also add to these tournaments,vote on what tournaments they like and filter by popularity.

This was built using a MEVN Stack. Database persistence is achieved by using mlab to store the data. Here is a link to the github repo containing the node server https://github.com/JamesAldridge/pokerApp

#### User Features

 + Add Player
 + Find Players
 + Delete Players
 + Add Tournament
 + Find Tournaments
 + Upvote Tournaments
 + Check Statistics
 + Check Live Events

#### Dependencies
todo

## Installation requirements and Running the app.
todo

Go to http://localhost:8080/#/Home

#### API interface.

+ POST /players/ - Add a player
+ GET /players/ - Get all players
+ GET /player/:id - Get a single player
+ DELETE /player/:id - Delete a player
+ POST /tournaments/ - Add a Tournament
+ GET /tournaments/ - Get all tournaments
+ GET /tournament/:id - Get a single tournament
+ PUT /tournament/:id/vote - Upvote a tournament
+ DELETE /tournament/:id - Delete a tournament

## MongoDB Schema.
The database consists of Tournaments and Players. Below is the schema for both.
#### Player
``` {
        "_id": "3424",
        "pokerAlias": "JamesA711",
        "winnings": -800,
        "afq": 22,
        "vpip": 19
    },
```
#### Player
```{
        "tournamentName": "Super Highroller",
        "buyIn": 200,
        "prizePool": 1500,
        "speed": "Regular",
        "tableSize": 9,
        "upvotes": 0
    },
```

## UI Design.


## Routing.

+ /Home/ - displays Home Page (signin/signup)
+ /Players/ - displays find players page
+ /Player/ - displays add player page in user
+ /Tournaments/ - displays find tournaments page
+ /Tournament/ - displays add tournament page
+ /Stats/ - displays statistics page
+ /Events/ - displays live events page




## Pending features
I had began to add localization to the application but did not complete this in time for the deadline. I had planned to add a collection for poker hand histories. There was a lot of complexity involved in tracking all the events in a poker hand. I planned to do this with the intent of turning the events into an animation to replay the events of the hand but due to time constraints this was not possible. I had enough time to develop the schema for the HandHistory but did not manage to convert this to an animation. Below is the schema for HandHistory
```
{
    _id: "100",
    smallBlind: 10,
    bigBlind: 25,
    ante: 0,
    preflopEvents: [{playerID: "01", holeCards: "AHAD", action: 100}, {playerID: "02", holeCards: "KDKS", action: 0}],
    flopCard: "9H8H2C",
    flopEvents: [{playerID: "01", action: 0}, {playerID: "02", action: 150},{playerID: "01", action: 0}],
    turnCard: "KH",
    turnEvents: [{playerID: "01", action: 0}, {playerID: "02", action: 325},{playerID: "01", action: null}],
    riverCard: null,
    riverEvents: null
}
```


## References
todo









