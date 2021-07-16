/* eslint-disable no-restricted-properties */
<template>
  <v-data-table
    :headers="headers"
    :items="values"
    item-key="name"
    no-data-text="Sem dados"
    loading-text="Carregando..."
    class="elevation-0 table"
    :items-per-page="values.length"
    hide-default-footer
    :headerProps="headerProps"
  >
    <template v-slot:item.name="{ item }">
      <strong style="font-weight: bold">{{ item.name }}</strong>
    </template>

    <template v-slot:item.profitability="{ item }">
      <strong style="font-weight: bold">{{ item.profitability.toFixed(2) }}</strong>%
    </template>

  </v-data-table>
</template>

<style >
.theme--light.v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper) {
  background: #232147 !important;
}

.table {
  background: radial-gradient(
    123.22% 129.67% at 100.89% -5.6%,
    #201d47 0%,
    #17153a 100%
  );

  color: #59588d !important;
}

.v-data-table-header tr{
  background: #232147;
  color: #59588d;
}

.v-data-table-header tr th {
  font-weight: bold;
  font-size: 1rem;
}

.v-data-table-header tr th {
  font-weight: bold;
  font-size: 1rem;

  color: #fff8 !important;
}

.v-data-table-header tr th {
  font-style: normal;
  font-weight: bold;
  border: none !important;
}

.v-data-table-header tr th:first-child {
  border-radius: 4px 0 0 4px;
}

.v-data-table-header tr th:last-child {
  border-radius: 0 4px 4px 0;
}

@media (max-width: 600px) {
  .table-header {
    display: none;
  }
}
</style>

<script>
export default {
  name: 'Table',

  props: {
    data: Object,
    salary: Number,
    monthlyCost: Number,
    monthlySavings: Number,
    selectedTax: Object,
  },

  created() {
    let init = this.monthlySavings;
    // eslint-disable-next-line no-restricted-properties
    const prof = ((Math.pow((1 + (this.selectedTax.tax / 100)), (1 / 12))) - 1) * 100;
    let fin = init * (1 + (prof / 100));
    let yiel = fin - init;

    for (let i = 1; i <= 240; i += 1) {
      if (i > 1) {
        init = fin + this.monthlySavings;
        fin = init * (1 + (prof / 100));
      }
      yiel = fin - init;

      this.values.push({
        month: i,
        initial: init.toLocaleString(),
        savings: this.monthlySavings.toLocaleString(),
        profitability: prof,
        final: fin.toLocaleString(),
        yield: yiel.toLocaleString(),
        year: (i / 12).toFixed(1),
      });
    }
  },

  data: () => ({
    values: [],
    headers: [
      {
        text: 'Mês',
        align: 'start',
        value: 'month',
      },
      { text: 'Valor Inicial', value: 'initial' },
      { text: 'Poupança Mensal', value: 'savings' },
      { text: 'Rentabilidade Mensal', value: 'profitability' },
      { text: 'Valor Final', value: 'final' },
      { text: 'Rendimento Mensal', value: 'yield' },
      { text: 'Ano', value: 'year' },
    ],
    headerProps: {
      sortByText: 'Ordenar por',
    },
  }),
};
</script>

<style>
</style>
