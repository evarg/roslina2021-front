<template>
  <div>
    <b-form @submit="onSubmit" @cancel="onCancel">
      <b-form-group
        id="input-group-1"
        label="Nazwa producenta:"
        label-for="input-1"
        label-align="left"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Wpisz nazwę"
          required
        ></b-form-input>

        <b-form-group
          id="input-group-2"
          label="Opis:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Opis odmiany"
          ></b-form-input>
        </b-form-group>

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
        description: "",
      },
      show: true,
      selected: null,
      options: [],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.save();
    },
    onCancel() {
      this.$router.push("/seed_producers");
    },
    save() {
      this.$http
        .put(this.$store.state.ApiURL + "seed_producers/" + this.form.id, this.form)
        .then(() => {
          this.$router.push({ path: "/seed_producers" });
        });
    },
    fetchData(id) {
      this.$http
        .get(this.$store.state.ApiURL + "seed_producers/" + id)
        .then((response) => response.json())
        .then((result) => (this.form = result));
    },
    fetchTypes() {
      this.$http
        .get(this.$store.state.ApiURL + "seed_producers")
        .then((response) => response.json())
        .then((result) => (this.options = result));
    },
  },
  created: function () {
    this.fetchData(this.$route.params.id);
    this.fetchTypes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  text-align: left;
  padding-left: 1cm;
}
</style>