<template>
  <div>
    <v-navigation-drawer v-if="!isMobile" class="side-bar" app dark permanent>
      <v-list nav>
        <v-list-item class="d-flex justify-center align-center pa-8 mb-12">
          <strong class="app-title">
            <v-icon class="mr-2">mdi-finance</v-icon>
            Finance
          </strong>
          <span class="app-label">App</span>
        </v-list-item>

        <v-list-item
          class="d-flex justify-center align-center"
          active-class="active"
          to="/"
        >
          <template v-slot:default="{ active }">
            <v-list-item-icon class="d-flex justify-center align-center">
              <v-icon class="ma-0" small :color="active ? '#53b9ea' : '#6f6c99'"
                >mdi-view-dashboard</v-icon
              >
            </v-list-item-icon>

            <v-list-item-content>
              <span class="item-label"> Dashboard </span>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item
          class="d-flex justify-center align-center"
          active-class="active"
          to="/stats"
        >
          <v-list-item-icon class="d-flex justify-center align-center">
            <v-icon class="ma-0" small color="#6f6c99">mdi-table</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <span class="item-label"> Tabela </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-if="isMobile" class="side-bar elevation-0" app>
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-if="isMobile"
      class="side-bar"
      app
      dark
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-item class="d-flex justify-center align-center pa-4 mb-12">
          <strong class="app-title">
            <v-icon class="mr-2">mdi-finance</v-icon>
            Finance</strong
          ><span class="app-label">App</span>
        </v-list-item>

        <v-list-item
          class="d-flex justify-center align-center"
          active-class="active"
          to="/"
        ><template v-slot:default="{ active }">
            <v-list-item-icon class="d-flex justify-center align-center">
              <v-icon class="ma-0" small :color="active ? '#53b9ea' : '#6f6c99'"
                >mdi-view-dashboard</v-icon
              >
            </v-list-item-icon>

            <v-list-item-content>
              <span class="item-label"> Dashboard </span>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item
          class="d-flex justify-center align-center"
          active-class="active"
          to="/stats"
        >
          <v-list-item-icon class="d-flex justify-center align-center">
            <v-icon class="ma-0" small color="#6f6c99">mdi-table</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <span class="item-label"> Tabela </span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style>
.v-list-item--link:before {
  background-color: transparent !important;
}

.active {
  font-size: 12.7401px;
  line-height: 15px;
  letter-spacing: 0.455002px;

  color: #53b9ea !important;
}

.active span {
  font-size: 12.7401px;
  line-height: 15px;
  letter-spacing: 0.455002px;

  color: #53b9ea !important;
}

.item-label {
  font-size: 12.7401px;
  line-height: 15px;
  letter-spacing: 0.455002px;

  background: transparent;
  color: #6f6c99;
}

.side-bar {
  background: linear-gradient(180deg, #211e48, #1c1a42, #17163b 100%);
}

.v-navigation-drawer__border {
  display: none !important;
}

.app-title {
  font-size: 1.2rem;
}

.app-label {
  font-weight: 300;
}

.label {
  font-size: 11.8301px;
  line-height: 14px;

  color: #5b5a99;
}
</style>

<script>
export default {
  name: 'Navigation',

  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize, { passive: true });
  },

  data: () => ({
    isMobile: true,
    drawer: false,
    items: [
      ['mdi-email', 'Inbox'],
      ['mdi-account-supervisor-circle', 'Supervisors'],
      ['mdi-clock-start', 'Clock-in'],
    ],
  }),

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960;
    },
  },
};
</script>
