<template>
  <div>
    <h2>
      <a v-on:click="newItem()">
        <b-icon-plus-circle scale="1" />
      </a>
      Odmiany
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

      <template v-slot:cell(type_name)="data">
        {{ data.item.type.name }}
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

export default {
  components: {
    BIconTrashFill,
    BIconSim,
    BIconPlusCircle,
  },
  data() {
    return {
      fields: [
        { key: "index", label: "LP", thStyle: "width: 10px" },
        { key: "name", label: "Nazwa" },
        { key: "type_name", label: "Gatunek" },
        { key: "modify", label: "", thStyle: "width: 60px" },
      ],
      items: [],
    };
  },
  methods: {
    fetchItems() {
      this.$http
        .get(this.$store.state.ApiURL + "variants")
        .then((response) => response.json())
        .then((result) => (this.items = result));
    },
    showItem(id) {
      this.$router.push("variants/" + id);
    },
    editItem(id) {
      this.$router.push("variants/" + id + "/edit");
    },
    newItem() {
      this.$router.push("variants/add");
    },
    deleteItem(id) {
      this.$confirm(
        "Czy napewno chcesz usunąć tą odmianę?",
        "Potwierdź usuwanie",
        "warning"
      ).then(() => {
        this.$http
          .delete(this.$store.state.ApiURL + "variants/" + id)
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
h1,
h2 {
  font-weight: normal;
  text-align: left;
  padding-left: 1cm;
}
</style>