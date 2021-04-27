<template>
  <div>
    ApiURL: {{ this.$store.state.ApiURL }}

    <button @click="fetchPosts()" class="btn btn-info">Pobierz</button>

    <table class="table table-hover">
      <tr>
        <th>Id</th>
        <th>Nazwa</th>
        <th>Gatunek</th>
        <th>Producent</th>
        <th>Data waznosci</th>
        <th>Edycja</th>
        <th>Usun</th>
      </tr>
      <tr v-for="seed in seeds" v-bind:key="seed.id">
        <td>{{ seed.id }}</td>
        <td>{{ seed.name }}</td>
        <td>{{ seed.type }}</td>
        <td>{{ seed.producer }}</td>
        <td>{{ seed.expiration_time }}</td>
        <td>
        </td>
        <td>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      seeds: [],
      api: ''
    }
  },
  methods: {
    fetchPosts () {
      this.$http
        .get(this.$store.state.ApiURL + 'seeds')
        .then(response => response.json())
        .then(result => (this.seeds = result))
    },
    deletePost (id) {
      this.$http.delete(this.$store.state.ApiURL + 'seeds/' + id).then(() => {
        this.fetchPosts()
      })
    }
  },
  created: function () {
    this.fetchPosts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>