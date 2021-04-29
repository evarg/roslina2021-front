<template>
  <div>
    Moj komponent
    <b-modal id="modal-new">
      <template #modal-header="{}">
        <h5>Dodaj nową grupę</h5>
      </template>

      <template #default="{}">
        <b-form>
          <b-form-group
            id="input-group-2"
            label="Nazwa grupy:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              placeholder="Wpisz nazwe"
              required
            ></b-form-input>
          </b-form-group>
        </b-form>
      </template>

      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="ok()">Zapisz</b-button>
        <b-button size="sm" variant="danger" @click="cancel()">Anuluj</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
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

<style scoped>
</style>