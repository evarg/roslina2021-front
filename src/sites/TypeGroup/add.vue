<template>
  <div>
    <b-form @submit="onSubmit" @cancel="onCancel" v-if="show">
      <b-form-group id="input-group-2" label="Nazwa grupy:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Wpisz nazwe"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" pill variant="primary">Zapisz</b-button>&nbsp;
      <b-button type="button" pill v-on:click="onCancel()">Anuluj</b-button>
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
      show: true,
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
        .post(this.$store.state.ApiURL + "type_groups", this.form)
        .then(() => {
          this.$router.push({ path: "/type_groups" });
        });
    },
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