<template>
  <v-card
    :class="
      selected
        ? 'card-selected d-flex justify-space-around'
        : 'card d-flex justify-space-around'
    "
    @click="select"
    width="230"
    height="70"
    dark
    :elevation="selected ? 2 : 0"
  >
    <div class="d-flex align-center justify-center ml-4">
      <v-img
        max-width="40"
        contain
        v-if="tax.name == 'NuBank'"
        src="../assets/nubank.png"
      ></v-img>
      <v-img
        max-width="80"
        contain
        v-if="tax.name == 'PicPay'"
        src="../assets/picpay.png"
      ></v-img>
      <v-img
        max-width="60"
        contain
        v-if="tax.name == 'Next'"
        src="../assets/next.png"
      ></v-img>
      <v-img
        max-width="60"
        contain
        v-if="tax.name == 'Pan'"
        src="../assets/pan.png"
      ></v-img>
      <span class="value" v-if="tax.name == 'Selic'"> SELIC </span>
      <span class="value" v-if="tax.name == 'C6'"> C6 Bank </span>
    </div>
    <div class="d-flex flex-column justify-center align-center">
      <div class="pa-1 d-flex justify-space-around align-center">
        <span class="value mr-2">{{(savings * (tax.tax/100)) | toFixed}}</span>
        <span class="currency">R$</span>
      </div>
      <div class="pa-1 d-flex justify-space-around align-center">
        <v-img :src="image"></v-img>
        <v-icon x-small>mdi-chevron-up</v-icon>
        <span class="tax ml-2">{{tax.tax}}%</span>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-selected {
  background: linear-gradient(
    135deg,
    #40ddff 0%,
    #14bae3 19.24%,
    #13b1e6 68.64%,
    #11aadf 81.77%,
    #0b98c5 100%
  );
  border-radius: 9.1px !important;
  transition: 0.3s
}

.card-selected:hover {
  border-radius: 9.1px !important;
  height: 75px !important;
}

.card {
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #17153a 100%
  );
  border: 0.910004px solid #312f62;
  box-sizing: border-box;
  border-radius: 9.1px !important;
  transition: 0.3s
}

.card:hover {
  height: 75px !important;
}

.value {
  font-size: 15.4701px;
  line-height: 18px;
  text-align: right;

  color: #ffffff;
}

.currency {
  font-size: 10.9201px;
  line-height: 13px;
  text-align: right;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
}

.tax {
  font-size: 10.01px;
  line-height: 12px;
  color: #ffffff;
}
</style>

<script>
export default {
  name: 'ValueCard',

  props: {
    savings: Number,
    selected: Boolean,
    tax: Object,
  },

  computed: {
    image() {
      return this.selected // eslint-disable-next-line global-require
        ? require('../assets/LineGraph.svg') // eslint-disable-next-line global-require
        : require('../assets/GraphLine.svg');
    },
  },

  filters: {
    toFixed(val) {
      return val.toFixed(2);
    },
  },

  methods: {
    select() {
      this.$emit('select', this.tax);
    },
  },
};
</script>
