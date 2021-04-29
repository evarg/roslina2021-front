<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
      
      <router-link to="/">Home</router-link>&nbsp;
      <router-link to="/seed_producers">Producenci nasion</router-link>&nbsp;
      <router-link to="/type_groups">Grupy gatunkow</router-link>&nbsp;
      <router-link to="/types">Gatunki</router-link>&nbsp;
      <router-link to="/variants">Odmiany</router-link>&nbsp;
      <router-link to="/seeds">Nasiona</router-link>&nbsp;
      <router-link to="/about">About</router-link>&nbsp;
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./Header";

export default {
  name: "RoslinaApp",
  components:{
    Header
  },
  data(){
    return{}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
