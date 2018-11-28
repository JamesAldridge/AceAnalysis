<template>
  <div id="app">
    <b-navbar toggleable="md" variant='dark' type='dark'>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/spade.png" class="img-circle logo-navbar" style="padding: 5px">
      <b-navbar-brand to="/">AceAnalysis</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
          <b-nav-item to="/about"><i class="fa fa-list" style="padding: 5px">About</i></b-nav-item>
          <b-nav-item to="/players"><i class="fa fa-list" style="padding: 5px">Players</i></b-nav-item>
          <b-nav-item to="/addPlayer"><i class="fa fa-list" style="padding: 5px">Add Player</i></b-nav-item>
          <b-nav-item to="/tournaments"><i class="fa fa-list" style="padding: 5px">Tournaments</i></b-nav-item>
          <b-nav-item to="/tournament"><i class="fa fa-list" style="padding: 5px">Add Tournament</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <!--Add content to this footer-->
    <div>
      <b-nav>
        <b-nav-item active>PokerStars</b-nav-item>
        <b-nav-item>Facebook</b-nav-item>
        <b-nav-item>An</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo-navbar {
  max-width: 25px;
}
</style>
