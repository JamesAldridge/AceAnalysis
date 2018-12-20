<template>
  <div id="app">
    <div id="headerNav">
      <img src="./assets/myLogo.png" class="img-circle logo-navbar" style="padding: 5px">
      <b-navbar toggleable="md" variant='dark' type='dark'>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item to="/Home"><i class="fa fa-home" style="padding: 5px"> Home</i></b-nav-item>
            <b-nav-item-dropdown text="Players" extra-toggle-classes="nav-link-custom" right>
              <b-nav-item to="/players"><i class="fa fa-user" style="padding: 5px"> View Players</i></b-nav-item>
              <b-nav-item to="/addPlayer"><i class="fa fa-plus" style="padding: 5px"> Add Player</i></b-nav-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Tournaments" extra-toggle-classes="nav-link-custom" right>
              <b-nav-item to="/tournaments"><i class="fa fa-trophy" style="padding: 5px"> View Tournaments</i></b-nav-item>
              <b-nav-item to="/addTournament"><i class="fa fa-plus" style="padding: 5px"> Add Tournament</i></b-nav-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/Stats"><i class="fas fa-chart-line"> Statistics</i></b-nav-item>
            <b-nav-item to="/Home"><i class="fa fa-globe-europe" style="padding: 5px"> Live Events</i></b-nav-item>

          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login"><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
            <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
            <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
    <!--Add content to this footer-->
    <div id="footer">
      <b-nav>
        <b-nav-item-dropdown id="nav7_ddown" text="English" extra-toggle-classes="nav-link-custom" right>
          <b-dropdown-item href="#">English</b-dropdown-item>
          <b-dropdown-item href="#">Deutsch</b-dropdown-item>
          <b-dropdown-item disabled href="#">中文</b-dropdown-item>
          <b-dropdown-item disabled href="#">Español</b-dropdown-item>
          <b-dropdown-item disabled href="#">Français</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/#"><i class="fa fa-facebook-square" style="padding: 5px">Facebook</i></b-nav-item>
        <b-nav-item to="/#"><i class="fa fa-twitter-square" style="padding: 5px">Twitter</i></b-nav-item>

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
  background-color: whitesmoke;
  color: darkslategray;
}

#locale-dropup{
  background-color: whitesmoke;

}

b-navbar{
  color: gold !important;
  background-color: #343a40;

}

#headerNav{
  background-color: #343a40;
  color: gold !important;
}
#header{
  background-color: #343a40;
  color: gold;
  font-family: Cochin;
}

body{
  margin-bottom: 50px;
}
#footer{
  position: fixed;
  height: 50px;
  background-color: #343a40;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
}

.logo-navbar {
  max-width: 250px;
}

.dropdown-menu-right {
  background-color: darkslateblue;
}
.dropdown-menu-right > a {
  color: gold;
}


.navbar-dark .navbar-nav .nav-link{
  color: palegoldenrod !important;
}
  .link-active{
    color: red!important;
  }
</style>
