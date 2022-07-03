<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="Search results"
      :rows="store.filteredClients"
      :columns="columns"
      row-key="name"
      :loading="store.loading"
      v-model:pagination="pagination"
      hide-pagination
    />
  </div>
</template>
<script setup lang="ts">
import { useCityStore } from "@/stores/CityStore";

const store = useCityStore();
const columns = [
  {
    name: "Name",
    required: true,
    label: "City Name",
    field: "name",
    sortable: true,
  },
  {
    name: "State",
    label: "State",
    field: "state",
    sortable: false,
  },
];
const pagination = {
  sortBy: "desc",
  descending: false,
  page: 1,
  rowsPerPage: 10,
};
store.fetchCities();
</script>
<style lang="sass">
.my-sticky-header-table
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    background-color: #eeeeee
    font-weight: 800
  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0
  &.q-table--loading thead tr:last-child th
    top: 48px
</style>
