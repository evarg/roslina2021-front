<template>
  <div>
    <modal-add></modal-add>

    <h2>
      <a v-on:click="$bvModal.show('modal-new')"
        ><b-icon-plus-circle scale="1"
      /></a>
      Test modal
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
  </div>
</template>

<script>
import { BIconTrashFill, BIconSim, BIconPlusCircle } from "bootstrap-vue";
import ModalAdd from "./ModalAdd.vue";

export default {
  components: {
    BIconTrashFill,
    BIconSim,
    BIconPlusCircle,
    ModalAdd
  },
  data() {
    return {
      fields: [
        { key: "index", label: "LP", class: "colLP" },
        { key: "name", label: "Nazwa" },
        { key: "modify", label: "" },
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