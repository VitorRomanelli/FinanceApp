<template>
  <v-card color="main ml-sm-4 ml-md-4 ml-lg-4 mb-4" dark>
    <v-card-title class="main-title">Divisão de gastos</v-card-title>

    <v-card-text>
      <v-row class="flex-column">
        <v-col class="d-flex justify-space-around align-center">
          <span class="value">50%</span>
          <v-divider class="mx-3"></v-divider>
          <span class="sub-title">Gastos Essenciais</span>
          <v-divider class="mx-3"></v-divider>
          <span class="currency">R${{salary * 0.5}}</span>
        </v-col>

        <v-col class="d-flex justify-space-around align-center">
          <span class="value">30%</span>
          <v-divider class="mx-3"></v-divider>
          <span class="sub-title">Investimentos</span>
          <v-divider class="mx-3"></v-divider>
          <span class="currency">R${{salary * 0.3}}</span>
        </v-col>

        <v-col class="d-flex justify-space-around align-center">
          <span class="value">10%</span>
          <v-divider class="mx-3"></v-divider>
          <span class="sub-title">Gastos não Essenciais</span>
          <v-divider class="mx-3"></v-divider>
          <span class="currency">R${{salary * 0.1}}</span>
        </v-col>

        <v-col class="d-flex justify-space-around align-center">
          <span class="value">10%</span>
          <v-divider class="mx-3"></v-divider>
          <span class="sub-title">Livre</span>
          <v-divider class="mx-3"></v-divider>
          <span class="currency">R${{salary * 0.1}}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.main {
  background: #232147;
}

.main-title {
  font-size: 10.9201px;
  line-height: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #B1AFCD;
}

.sub-title {
  font-size: 12.9153px;
  line-height: 15px;
  color: #b1afcd;
}

.value {
  font-size: 12.9153px;
  line-height: 15px;
  color: #11aadf;
}

.currency {
  font-size: 11.9927px;
  line-height: 14px;
  color: #50E3C2;
}
</style>

<script>
export default {
  name: 'SalaryDivision',

  props: {
    salary: Number,
  },

};

</script>
