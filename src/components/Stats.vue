<template>
  <div class="hero">
    <h2>A breakdown of poker statistics</h2>
    <h4>Learn to exploit your opponents based on their tendencies <a href="https://redchippoker.com/basic-hud-stats/">(source)</a>.</h4>
    <ul class="list-unstyled">
      <b-media tag="li">
        <h5 class="mt-0 mb-1">AFQ</h5>
        This is a player’s aggression frequency. The formula for this stat is (Bets + Raises)/Calls. Effectively, it is
        a measure of the aggressive tendencies of a particular player. We can use this in various ways. For instance, if
        a player has an AF of 3, it means that he is 3 times as likely to make an aggressive action versus a calling
        action. If a player has an AF of 1, it means he is equally likely to make an aggressive or calling action. Good
        players understand that aggressive poker is winning poker, and thus a smaller AF usually denotes a player who is
        weak in poker understanding. This stat should be taken with a large grain of salt in small sample sizes, but it
        can give us ideas on what kind of general actions we can expect from an opponent.
      </b-media>
      <b-media tag="li" class="my-4">
        <h5 class="mt-0 mb-1">VPIP</h5>
        This is one of the most, if not the most, important stats on our HUD. VPIP is a player’s “voluntary put money in
        pot” percentage. So if a player posts the BB, and never puts another cent in the pot, it doesn’t count because
        the money put in wasn’t voluntary. Essentially, it tells how often this player is getting involved preflop. A
        high VPIP lets us know that a player is very active preflop, while a low VPIP lets us know that a player is
        being much more selective with their hands.
      </b-media>
      <b-media tag="li">
        <h5 class="mt-0 mb-1">PFR</h5>
        The PFR stat lets us know how often a player raises preflop. This raise could be in the form of open raising,
        isolating, 3betting, cold-4betting, etc. A high PFR lets us know that a player is raising and playing a lot of
        their preflop hands aggressively. A low PFR can mean various things, and this is why we usually look at VPIP and
        PFR together. A large gap between those VPIP and PFR implies that a player is more passive, whereas a small gap
        implies they are more aggressive in general.
      </b-media>
    </ul>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 40pt;
    margin-bottom: 10px;
  }
</style>
