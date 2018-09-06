import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

import { app } from './modules/app';
import { vacuum } from './modules/vacuum';

export default new Vuex.Store({
  strict: debug,
  modules: {
    app,
    vacuum,
  },
});
