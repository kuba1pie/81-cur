<template>
  <section class="shadow-2 rounded-borders">
    <CityForm />
    <CityResult />
  </section>
</template>
<script setup lang="ts">
import { useCityStore } from "@/stores/CityStore";

useCityStore();
</script>
