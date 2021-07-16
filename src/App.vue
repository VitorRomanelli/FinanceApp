<template>
  <v-app>
    <Navigation />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
html, body, * {
  font-family: 'Roboto', sans-serif;
}

body::-webkit-scrollbar {
  background: #16153b;
  width: 12px;
}

body::-webkit-scrollbar-thumb {
  background: #38346b;
  border-radius: 20px;
}
</style>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Navigation,
  },
};
</script>
