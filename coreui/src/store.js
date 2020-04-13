import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  RECAPTCHA_SITE_KEY:"6LeKYugUAAAAAH6CArdCzWCut7DesdKzNzwxwAYm",
  HERE_LOCATION_REST_API_KEY:'boYsEVSWamiUWI9wWIZ3VXCcOE62ov9yYRxFE2kg5CM', //https://developer.here.com/
  HERE_LOCATION_REST_APP_ID:'lCRo4m0WpqNPoKd1GaiU',
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  mutations,
})