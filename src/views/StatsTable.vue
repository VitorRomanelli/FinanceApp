<template>
  <div class="stats-table">
    <Header
      title="Tabela"
      subtitle="Veja com detalhes em quanto tempo você atingirá seus objetivos"
    />

    <v-container>
      <div class="ml-sm-12 ml-md-12 ml-lg-12">
        <div class="d-flex flex-column align-start mb-8" style="width: 100%">
          <Form
            :salary="salary"
            :monthlyCost="monthlyCost"
            :monthlySavings="monthlySavings"
            @update="update"
          />
          <ValueList :savings="monthlySavings" @updateTax="updateTax"/>
        </div>

        <Table
          :data="data"
          :salary="salary"
          :monthlyCost="monthlyCost"
          :monthlySavings="monthlySavings"
          :selectedTax="tax"
          :key="key"
        />
      </div>
    </v-container>
  </div>
</template>

<style scoped>
.stats-table {
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #17153a 100%
  );

  width: 100%;
  height: 100%;
}
</style>

<script>
import Form from '../components/Form.vue';
import ValueList from '../components/ValueList.vue';
import Header from '../components/Header.vue';
import Table from '../components/Table.vue';

export default {
  name: 'StatsTable',

  created() {
    this.data = JSON.parse(localStorage.getItem('data'));
    this.taxes = JSON.parse(localStorage.getItem('taxes'));
    this.tax = this.taxes.find((tax) => tax.name === 'Selic');
  },

  data: () => ({
    key: null,
    data: null,
    tax: null,
    taxes: [],
    salary: 1100,
    monthlyCost: null,
    monthlySavings: 330,
  }),

  components: {
    Table,
    Header,
    Form,
    ValueList,
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
  },
};
</script>
