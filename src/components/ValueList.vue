<template>
  <div>
    <div>
      <span class="label">Valores </span>
      <span class="sub-label"> (De acordo com poupança mensal)</span>
    </div>

    <v-row class="mt-2">
      <v-col
        class="d-flex flex-column justify-center align-center"
        v-for="tax in taxes"
        :key="tax.name"
      >
        <ValueCard :savings="savings" :selected="tax.selected" :tax="tax" @select="selectCard"/>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.label {
  font-size: 10.9201px;
  line-height: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #b1afcd;
}

.sub-label {
  font-size: 8.6201px;
  line-height: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #b1afcd;
}
</style>

<script>
import ValueCard from './ValueCard.vue';

export default {
  name: 'ValueValueCards',

  props: {
    savings: Number,
  },

  created() {
    this.taxes = JSON.parse(localStorage.getItem('taxes'));
  },

  data: () => ({
    taxes: null,
  }),

  components: {
    ValueCard,
  },

  methods: {
    selectCard(myTax) {
      this.taxes.find((tax) => tax.selected === true).selected = false;
      this.taxes.find((tax) => tax === myTax).selected = true;
      this.$emit('updateTax', myTax);
    },
  },
};
</script>
