import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const theme = {
  primary: 'radial-gradient(123.22% 129.67% at 100.89% -5.6%, #201D47 0%, #17153A 100%)',
  secondary: '#1f1c46',
  terciary: 'linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%);',
  quaternary: '#ce388f',
  success: '#1ed47b',
  error: '#e2507a',
  info: '#70b2ff',
};

export default new Vuetify({
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
