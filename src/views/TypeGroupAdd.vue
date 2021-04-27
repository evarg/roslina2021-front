<template>
  <div>
    <router-link to="/posts" class="btn btn-success"
      >Powrót do listy</router-link
    >
    <div class="form-group">
      <label for="name">Nazwa typu</label>
      <input
        v-model="type_group.name"
        class="form-control"
        type="text"
        id="name"
        name="name"
      />
    </div>
    <div class="form-group">
      <button @click="savePost" class="btn btn-primary">Zapisz</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type_group: {
        name: '',
      }
    }
  },
  methods: {
    savePost () {
      this.$http.post(this.$store.state.ApiURL + 'posts', this.post).then(() => {
        this.$router.push({ path: '/posts' })
      })
    }
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