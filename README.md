# Web Application Development Assignment 2 - AceAnalysis Design Document/README.
+ Name: James Aldridge
+ Student Number: 20071749

<img width="318" alt="screen shot 2018-12-20 at 20 32 28" src="https://user-images.githubusercontent.com/14348553/50313126-4f1ca080-04a2-11e9-9ab2-19414ee8bf82.png">

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
+  axios: ^0.18.,
+  bootstrap-vue: ^2.0.0-rc.11,
+  casperjs: ^1.1.4,
+  vue: ^2.5.2,
+  vue-i18n": ^8.5.0,
+  vue-router": ^3.0.1,
+  vue-sweetalert: ^0.1.18,
+  vue-sweetalert2: ^1.6.3,
+  vue-tables-2: ^1.4.70,
+  vue2-google-maps: ^0.10.5,
+  vueform: ^2.0.0,
+  vuelidate: ^0.7.4,
+  vuetify: ^1.3.9

## Installation requirements and Running the app.


Clone https://github.com/JamesAldridge/pokerApp and `cd` into the directory.
```
$ npm install
$ npm run start
```
Once the node server is running then in a seperate terminal Clone this project  and `cd` into the` directory
```
$ npm install

$ npm run start
```
To run tests execute
```
$ npm test
```

App should be available at http://localhost:8080/#/Home

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
#### Tournament
```{
        "tournamentName": "Super Highroller",
        "buyIn": 200,
        "prizePool": 1500,
        "speed": "Regular",
        "tableSize": 9,
        "upvotes": 0
    },
```

## UI Design

#### Header/Navbar
<img width="1438" alt="screen shot 2018-12-20 at 20 30 01" src="https://user-images.githubusercontent.com/14348553/50313225-9571ff80-04a2-11e9-9b06-1cf3014cac3a.png">

#### HomePage (slideshow)
<img width="1440" alt="screen shot 2018-12-20 at 20 30 21" src="https://user-images.githubusercontent.com/14348553/50313226-960a9600-04a2-11e9-8a70-8946a2d33a24.png">
<img width="1440" alt="screen shot 2018-12-20 at 20 30 38" src="https://user-images.githubusercontent.com/14348553/50313227-960a9600-04a2-11e9-9355-a2ccc1042de6.png">
<img width="1440" alt="screen shot 2018-12-20 at 20 30 44" src="https://user-images.githubusercontent.com/14348553/50313228-960a9600-04a2-11e9-836c-062d9ef384ef.png">
<img width="1436" alt="screen shot 2018-12-20 at 20 30 51" src="https://user-images.githubusercontent.com/14348553/50313229-960a9600-04a2-11e9-804b-6d959b20226d.png">

#### View Players
<img width="1440" alt="screen shot 2018-12-20 at 20 31 05" src="https://user-images.githubusercontent.com/14348553/50313230-96a32c80-04a2-11e9-9e76-5bd9b77d3926.png">

#### Add a Player
<img width="1440" alt="screen shot 2018-12-20 at 20 31 13" src="https://user-images.githubusercontent.com/14348553/50313231-96a32c80-04a2-11e9-9708-220bd92acda2.png">

#### View Tournaments
<img width="1439" alt="screen shot 2018-12-20 at 20 31 21" src="https://user-images.githubusercontent.com/14348553/50313232-96a32c80-04a2-11e9-868e-e3bd71ecf60f.png">

#### Add a Tournament
<img width="1440" alt="screen shot 2018-12-20 at 20 31 31" src="https://user-images.githubusercontent.com/14348553/50313233-973bc300-04a2-11e9-8bdb-aeb331c3f3ce.png">

#### View Statistics
<img width="1438" alt="screen shot 2018-12-20 at 20 31 44" src="https://user-images.githubusercontent.com/14348553/50313234-973bc300-04a2-11e9-8354-08f87d07e265.png">

#### View Live Events
<img width="1440" alt="screen shot 2018-12-20 at 20 32 01" src="https://user-images.githubusercontent.com/14348553/50313236-97d45980-04a2-11e9-8151-935e6c7b6522.png">

## Routing.

+ /Home/ - displays Home Page (signin/signup)
+ /Players/ - displays find players page
+ /Player/ - displays add player page in user
+ /Tournaments/ - displays find tournaments page
+ /Tournament/ - displays add tournament page
+ /Stats/ - displays statistics page
+ /Events/ - displays live events page


## DX Approach

+ capsar test
+ unit test
+ git repo with commit history
+ ES6 + JS best practices

## Pending features
I had began to add localization to the application but did not complete this in time for the deadline. 
<img width="340" alt="screen shot 2018-12-20 at 20 32 16" src="https://user-images.githubusercontent.com/14348553/50313237-97d45980-04a2-11e9-9e91-5c42f8400305.png">

I had planned to add a collection for poker hand histories. There was a lot of complexity involved in tracking all the events in a poker hand. I planned to do this with the intent of turning the events into an animation to replay the events of the hand but due to time constraints this was not possible. I had enough time to develop the schema for the HandHistory but did not manage to convert this to an animation. Below is the schema for HandHistory
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


## References/Resources Used
+ Docs.mlab.com. (2018). Quick-Start Guide to mLab | mLab Documentation & Support. [online] 
 Available at: https://docs.mlab.com/ 
+ https://developers.google.com/maps/documentation/
+ https://ddrohan.github.io/wit-wad-2-2018/










