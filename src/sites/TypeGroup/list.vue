<template>
  <div>
    <h2>
      <a v-on:click="newItem()">
        <b-icon-plus-circle scale="1" />
      </a>
      Grupy gatunkow
    </h2>

    <b-table
      :striped="true"
      :bordered="true"
      :outlined="false"
      :small="false"
      :hover="false"
      :dark="false"
      :fixed="false"
      :foot-clone="false"
      :items="items"
      :fields="fields"
    >
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <template v-slot:cell(name)="data">
        <a v-on:click="showItem(data.item.id)">{{ data.item.name }}</a>
      </template>

      <template v-slot:cell(modify)="data">
        <a v-on:click="editItem(data.item.id)"><b-icon-sim /></a>
        <a v-on:click="deleteItem(data.item.id)"><b-icon-trash-fill /></a>
      </template>
    </b-table>

    <b-modal id="modal-new">
      <template #modal-header="{}">
        <h5>Dodaj nową grupę</h5>
      </template>

      <template #default="{}">
        <b-form @submit="onSubmit" @cancel="onCancel">
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

          <b-button type="submit" variant="primary">Zapisz</b-button>&nbsp;
          <b-button type="cancel" variant="danger">Anuluj</b-button>&nbsp;
        </b-form>
      </template>

      <template #modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="ok()">Zapisz</b-button>
        <b-button size="sm" variant="danger" @click="cancel()">Anuluj</b-button>
        <b-button size="sm" variant="success" type="submit">Zapisz</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { BIconTrashFill, BIconSim, BIconPlusCircle } from "bootstrap-vue";

export default {
  components: {
    BIconTrashFill,
    BIconSim,
    BIconPlusCircle,
  },
  data() {
    return {
      fields: [
        { key: "index", label: "LP", class: "colLP", thStyle: "width: 10px" },
        { key: "name", label: "Nazwa" },
        { key: "modify", label: "", thStyle: "width: 60px" },
      ],
      items: [],
      routeName: "type_groups",
    };
  },
  methods: {
    fetchItems() {
      this.$http
        .get(this.$store.state.ApiURL + "type_groups")
        .then((response) => response.json())
        .then((result) => (this.items = result));
    },
    showItem(id) {
      this.$router.push(this.routeName + "/" + id + "/edit");
    },
    editItem(id) {
      this.$router.push(this.routeName + "/" + id + "/edit");
    },
    newItem() {
      this.$router.push(this.routeName + "/add");
    },    
    deleteItem(id) {
      this.$confirm(
        "Czy napewno chcesz usunąć tą grupę roślin?",
        "Potwierdź usuwanie",
        "warning"
      ).then(() => {
        this.$http
          .delete(this.$store.state.ApiURL + "type_groups/" + id)
          .then(() => {
            this.fetchItems();
          });
      });
    },
    onCancel() {},
  },
  created: function () {
    this.fetchItems();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#colLP {
  width: 90%;
}

h1,
h2 {
  font-weight: normal;
  text-align: left;
  padding-left: 1cm;
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