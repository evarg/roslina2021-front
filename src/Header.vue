<template>
  <header class="container to borders">
    <h1 class="logo"><img src="./assets/logo-roslina.png" height="30"></h1>
    dupa dupa dupa
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {}
  }
}
</script>

<style>
header{
  padding: 15px;
  background: #42b983;

  .logo{
    max-width: 150px;
    img{
      max-width: 100%;     
    }
  }
}


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
