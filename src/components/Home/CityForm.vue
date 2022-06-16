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
import { useCityStore } from "@/stores/CityStore";
const store = useCityStore();
</script>
