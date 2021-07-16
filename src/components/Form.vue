<template>
  <div>
    <v-form ref="form">
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="3">
          <span class="label">Salário</span>
          <v-text-field
            dark
            dense
            outlined
            placeholder="R$"
            type="number"
            :rules="[
              (v) => !!v || 'Salário obrigatório',
            ]"
            v-model="mySalary"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <span class="label">Custo Mensal</span>
          <v-text-field
            dark
            dense
            outlined
            placeholder="R$"
            type="number"
            :rules="[
              (v) => !!v || 'Custo obrigatório',
              (v) => v <= mySalary - myMonthlySavings || 'Valor inválido',
            ]"
            v-model="myMonthlyCost"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <span class="label">Poupança Mensal</span>
          <v-text-field
            dark
            dense
            outlined
            placeholder="%"
            type="number"
            :rules="[
              (v) => !!v || 'Poupança obrigatória',
              (v) => v <= mySalary - myMonthlyCost || 'Valor inválido',
            ]"
            v-model="myMonthlySavings"
          >
          </v-text-field>
        </v-col>
        <v-col class="d-flex align-center" cols="12" sm="3" md="3" lg="3">
          <v-btn
            class="btn mb-4 mb-sm-0 mb-md-0 mb-lg-0"
            block
            dark
            elevation="0"
            @click="update"
          >
            Alterar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
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

.btn:hover {
  background: linear-gradient(180deg, #211e48, #1c1a42, #17163b 100%);
}

.btn {
  background: linear-gradient(
    135deg,
    #40ddff 0%,
    #14bae3 19.24%,
    #13b1e6 68.64%,
    #11aadf 81.77%,
    #0b98c5 100%
  );
  border-radius: 9.1px !important;
  font-size: 10.9201px;
  transition: 0.3s;
}
</style>

<script>
export default {
  name: 'Form',

  props: {
    salary: Number,
    monthlyCost: Number,
    monthlySavings: Number,
  },

  created() {
    if (this.salary != null) {
      this.mySalary = this.salary;
    }
    if (this.monthlyCost != null) {
      this.myMonthlyCost = this.monthlyCost;
    }

    if (this.monthlySavings != null) {
      this.myMonthlySavings = this.monthlySavings;
    }
  },

  data: () => ({
    mySalary: 1100,
    myMonthlyCost: 600,
    myMonthlySavings: 330,
  }),

  methods: {
    update() {
      if (this.$refs.form.validate()) {
        const model = {
          salary: parseInt(this.mySalary, 10),
          monthlyCost: parseInt(this.myMonthlyCost, 10),
          monthlySavings: parseInt(this.myMonthlySavings, 10),
        };
        this.$emit('update', model);
      }
    },
  },
};
</script>
