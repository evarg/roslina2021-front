<template>
  <div>
    ApiURL: {{ this.$store.state.ApiURL }}

    <button @click="fetchPosts()" class="btn btn-info">Pobierz</button>

    <h2>Lista grup gatunkow</h2>

    <table class="table table-hover">
      <tr>
        <th>Id</th>
        <th>Nazwa grupy</th>
        <th>Edycja</th>
        <th>Usun</th>
      </tr>
      <tr v-for="type_group in type_groups" v-bind:key="type_group.id">
        <td>{{ type_group.id }}</td>
        <td>{{ type_group.name }}</td>
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
      type_groups: [],
      api: ''
    }
  },
  methods: {
    fetchPosts () {
      this.$http
        .get(this.$store.state.ApiURL + 'type_groups')
        .then(response => response.json())
        .then(result => (this.type_groups = result))
    },
    deletePost (id) {
      this.$http.delete(this.$store.state.ApiURL + 'type_groups/' + id).then(() => {
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