import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.grey.darken4,
            secondary: colors.grey.darken4,
            accent: colors.grey.darken4,
          },
        },
      },
});
