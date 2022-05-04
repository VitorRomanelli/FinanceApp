<template>
  <div class="dash">
    <Header
      title="Dashboard"
      subtitle="Confira quais rentabilidades podem valer mais a pena para o seu dinheiro"
    />

    <v-container>
      <div class="ml-sm-12 ml-md-12 ml-lg-12">
        <div class="d-flex flex-column align-start" style="width: 100%">
          <Form
            :salary="salary"
            :monthlyCost="monthlyCost"
            :monthlySavings="monthlySavings"
            @update="update"
          />
          <ValueList :savings="monthlySavings" @updateTax="updateTax" />

          <div class="content mt-4" style="width: 100%">
            <HorizontalChart />
            <div class="cards">
              <SalaryDivision :salary="salary" />
              <MarksCard
                :salary="salary"
                :monthlyCost="monthlyCost"
                :monthlySavings="monthlySavings"
                :selectedTax="tax"
                :key="key"
              />
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.dash {
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #17153a 100%
  );

  width: 100%;
  height: 100%;
}

.content {
  display: flex;
}

@media (max-width: 850px) {
  .content {
    flex-direction: column-reverse;
  }
}
</style>

<script>
import api from "../services/api";
import Header from "../components/Header.vue";
import ValueList from "../components/ValueList.vue";
import Form from "../components/Form.vue";
import HorizontalChart from "../components/Charts/HorizontalChart.vue";
import MarksCard from "../components/MarksCard.vue";
import SalaryDivision from "../components/SalaryDivision.vue";

export default {
  name: "Home",

  async created() {
    if (localStorage.getItem("data") == null) {
      await this.searchData();
    } else {
      this.data = JSON.parse(localStorage.getItem("data"));
      this.taxes = JSON.parse(localStorage.getItem("taxes"));
      this.tax = this.taxes.find((tax) => tax.name === "Selic");
    }
  },

  data: () => ({
    data: null,
    taxes: [],
    tax: null,
    salary: 1100,
    monthlyCost: null,
    monthlySavings: 330,
    key: false,
  }),

  components: {
    Header,
    ValueList,
    HorizontalChart,
    MarksCard,
    Form,
    SalaryDivision,
  },

  methods: {
    update(model) {
      this.salary = model.salary;
      this.monthlyCost = model.monthlyCost;
      this.monthlySavings = model.monthlySavings;
      this.key = !this.key;
    },

    updateTax(newTax) {
      this.tax = newTax;
      this.key = !this.key;
    },

    async searchData() {
      await api
        .get("https://api.hgbrasil.com/finance?format=json-cors&key=7e3b3ed9")
        .then((response) => {
          this.data = response.data;
          this.data.results.taxes.map((tax) => {
            this.taxes.push({
              name: "NuBank",
              tax: tax.cdi,
              background: "#820ad1",
              selected: false,
            });
            this.taxes.push({
              name: "Selic",
              tax: tax.selic,
              background: "#00427a",
              selected: true,
            });
            return 0;
          });

          this.taxes.push({
            name: "PicPay",
            tax: this.data.results.taxes[0].cdi * 1.3,
            background: "#11c76f",
            selected: false,
          });

          this.taxes.push({
            name: "C6",
            tax: this.data.results.taxes[0].cdi * 1.02,
            background: "#bdc183",
            selected: false,
          });

          this.taxes.push({
            name: "Next",
            tax: this.data.results.taxes[0].cdi * 2.0,
            background: "#00ff5f",
            selected: false,
          });

          this.taxes.push({
            name: "Pan",
            tax: this.data.results.taxes[0].cdi * 1.03,
            background: "#039be5",
            selected: false,
          });

          localStorage.setItem("data", JSON.stringify(this.data));
          localStorage.setItem("taxes", JSON.stringify(this.taxes));
        });
    },
  },
};
</script>
