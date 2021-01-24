<template>
  <v-app>
    <v-main id="page">
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main,
  },

  data: () => ({}),

  methods: {},
};
</script>

<style>
#page {
  background-color: #2e3440;
}
</style>
