<template>
  <div class="q-pa-md">
    <q-input
      square
      standout
      v-model="store.filterText"
      label="Type city name to filter"
    />
  </div>
</template>
<script setup lang="ts">
const store = useCityStore();
</script>
