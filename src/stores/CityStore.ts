import { defineStore } from "pinia";
type City = {
  _id: string;
  index: number;
  name: string;
  state: string;
  latitude: number;
  longitude: number;
};
export const useCityStore = defineStore("CityStore", {
  state: () => ({
    cities: [] as City[],
    loading: false,
    filterText: "",
  }),
  actions: {
    async fetchCities() {
      this.cities = [];
      this.loading = true;
      try {
        this.cities = await fetch("generated.json").then((response) =>
          response.json()
        );
      } catch (error) {
        console.error("There was an error!", error);
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    filteredClients(state) {
      const result = state.cities.filter((city) => {
        return (
          city.name.toLowerCase().indexOf(state.filterText.toLowerCase()) > -1
        );
      });
      return result;
    },
  },
});
