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
          placeholder="Wpisz nazwę"
          required
        ></b-form-input>

        <b-form-group
          id="input-group-2"
          label="Opis gatunku:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Opis gatunku"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Należy do grupy:"
          label-for="input-3"
        >
          <b-form-select
            id="input-3"
            v-model="form.type_group_id"
            :options="options"
            value-field="id"
            text-field="name"
          ></b-form-select>
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
        type_group_id: null,
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
      this.$router.push("/types");
    },
    save() {
      this.$http
        .put(this.$store.state.ApiURL + "types/" + this.form.id, this.form)
        .then(() => {
          this.$router.push({ path: "/types" });
        });
    },
    fetchData(id) {
      this.$http
        .get(this.$store.state.ApiURL + "types/" + id)
        .then((response) => response.json())
        .then((result) => (this.form = result));
    },
    fetchTypeGroups() {
      this.$http
        .get(this.$store.state.ApiURL + "type_groups")
        .then((response) => response.json())
        .then((result) => (this.options = result));
    },
  },
  created: function () {
    this.fetchData(this.$route.params.id);
    this.fetchTypeGroups();
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