import Vuex from 'vuex'
import Vue from 'vue'
import Vault from './Vault'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    modules: {
        Vault
    }
})
