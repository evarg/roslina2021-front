<template>
  <div>
    <h2>
      <a v-on:click="newItem()">
        <b-icon-plus-circle scale="1" />
      </a>
      Gatunki
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

      <template v-slot:cell(group_name)="data">
        {{ data.item.type_group.name }}
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
        { key: "group_name", label: "Grupa" },
        { key: "modify", label: "", thStyle: "width: 60px" },
      ],
      items: [],
    };
  },
  methods: {
    fetchItems() {
      this.$http
        .get(this.$store.state.ApiURL + "types")
        .then((response) => response.json())
        .then((result) => (this.items = result));
    },
    showItem(id) {
      this.$router.push("types/" + id);
    },
    editItem(id) {
      this.$router.push("types/" + id + "/edit");
    },
    newItem() {
      this.$router.push("types/add");
    },
    deleteItem(id) {
      this.$confirm(
        "Czy napewno chcesz usunąć ten gatunek?",
        "Potwierdź usuwanie",
        "warning"
      ).then(() => {
        this.$http.delete(this.$store.state.ApiURL + "types/" + id).then(() => {
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