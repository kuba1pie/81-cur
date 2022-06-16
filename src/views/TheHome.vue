<template>
  <section class="shadow-2 rounded-borders">
    <CityForm />
    <CityResult />
  </section>
</template>
<script setup lang="ts">
import CityForm from "@/components/Home/CityForm.vue";
import CityResult from "@/components/Home/CityResult.vue";

import { useCityStore } from "@/stores/CityStore";

useCityStore();
</script>
