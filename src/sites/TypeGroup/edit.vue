<template>
  <div>
    <b-form @submit="onSubmit" @cancel="onCancel">
      <b-form-group
        id="input-group-1"
        label="Nazwa grupy:"
        label-for="input-1"
        label-align="left"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Wpisz nazwe"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" pill variant="primary">Zapisz</b-button>&nbsp;
      <b-button type="button" pill v-on:click="onCancel()">Anuluj</b-button
      >&nbsp;
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.save();
    },
    onCancel() {
      this.$router.push("/type_groups");
    },
    save() {
      this.$http
        .put(
          this.$store.state.ApiURL + "type_groups/" + this.form.id,
          this.form
        )
        .then(() => {
          this.$router.push({ path: "/type_groups" });
        });
    },
    fetchData(id) {
      this.$http
        .get(this.$store.state.ApiURL + "type_groups/" + id)
        .then((response) => response.json())
        .then((result) => (this.form = result));
    },
  },
  created: function () {
    this.fetchData(this.$route.params.id);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>