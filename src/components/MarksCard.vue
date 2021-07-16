<template>
  <v-card color="main ml-sm-4 ml-md-4 ml-lg-4" dark min-width="290">
    <v-card-title class="app-title">Marcos Futuros</v-card-title>

    <v-card-text>
      <v-timeline align-top dense>
        <v-timeline-item color="#31afd6" fill-dot small>
          <v-row class="pt-1">
            <v-col cols="6">
              <strong class="time-title">Em 5 anos</strong>
              <br />
              <span class="time-yield">+ {{fiveSavings}}</span>
              <v-icon x-small color="#50E3C2">mdi-chevron-up</v-icon>
            </v-col>
            <v-col>
              <span class="time-currency">R$ </span>
              <strong class="time-value">{{five.toLocaleString()}}</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#31afd6" fill-dot small>
          <v-row class="pt-1">
            <v-col cols="6">
              <strong class="time-title">Em 10 anos</strong>
              <br />
              <span class="time-yield">+ {{tenSavings.toLocaleString()}}</span>
              <v-icon x-small color="#50E3C2">mdi-chevron-up</v-icon>
            </v-col>
            <v-col>
              <span class="time-currency">R$ </span>
              <strong class="time-value">{{ten}}</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#31afd6" fill-dot small>
          <v-row class="pt-1">
            <v-col cols="6">
              <strong class="time-title">Em 15 anos</strong>
              <br />
              <span class="time-yield">+ {{fiftenSavings.toLocaleString()}}</span>
              <v-icon x-small color="#50E3C2">mdi-chevron-up</v-icon>
            </v-col>
            <v-col>
              <span class="time-currency">R$ </span>
              <strong class="time-value">{{fiften}}</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="#31afd6" fill-dot small>
          <v-row class="pt-1">
            <v-col cols="6">
              <strong class="time-title">Em 20 anos</strong>
              <br />
              <span class="time-yield">+ {{twelveSavings.toLocaleString()}}</span>
              <v-icon x-small color="#50E3C2">mdi-chevron-up</v-icon>
            </v-col>
            <v-col>
              <span class="time-currency">R$ </span>
              <strong class="time-value">{{twelve}}</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.main {
  background: #232147;
}

.app-title {
  font-size: 11.0702px;
  line-height: 13px;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #b1afcd;
}

.time-title {
  font-size: 12.9153px;
  line-height: 15px;
  color: #b1afcd;
}

.time-currency {
  font-size: 10.1477px;
  line-height: 12px;
  letter-spacing: -0.169128px;
  color: #75749c;
}

.time-yield {
  font-family: HelveticaNeue;
  font-size: 11.9927px;
  line-height: 14px;
  color: #50E3C2;
}

.time-value {
  font-size: 12.9153px;
  line-height: 15px;
  color: #11aadf;
}
</style>

<script>
export default {
  name: 'MarksCard',

  props: {
    data: Object,
    salary: Number,
    monthlyCost: Number,
    monthlySavings: Number,
    selectedTax: Object,
  },

  data: () => ({
    five: null,
    ten: null,
    fiften: null,
    twelve: null,
    fiveSavings: null,
    tenSavings: null,
    fiftenSavings: null,
    twelveSavings: null,
  }),

  created() {
    let init = this.monthlySavings;
    // eslint-disable-next-line no-restricted-properties
    const prof = ((Math.pow((1 + (this.selectedTax.tax / 100)), (1 / 12))) - 1) * 100;
    let fin = init * (1 + (prof / 100));

    for (let i = 1; i <= 240; i += 1) {
      if (i > 1) {
        init = fin + this.monthlySavings;
        fin = init * (1 + (prof / 100));
      }

      if (i === 60) {
        this.five = fin.toLocaleString();
        this.fiveSavings = (fin - this.monthlySavings).toLocaleString();
      }

      if (i === 120) {
        this.ten = fin.toLocaleString();
        this.tenSavings = (fin - this.monthlySavings).toLocaleString();
      }

      if (i === 180) {
        this.fiften = fin.toLocaleString();
        this.fiftenSavings = (fin - this.monthlySavings).toLocaleString();
      }

      if (i === 240) {
        this.twelve = fin.toLocaleString();
        this.twelveSavings = (fin - this.monthlySavings).toLocaleString();
      }
    }
  },
};
</script>

<style scoped>
</style>
