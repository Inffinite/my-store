export default {
    state: {
        contactsTab: false
    },

    getters: {
        getContactsState(state){
            return state.contactsTab
        }
    },

    mutations: {
        SET_CONTACTS_TAB_STATE(state, tabsState){
            state.contactsTab = tabsState
        },
    },

    actions: {
        changeContactTab({ commit }, state){
            commit('SET_CONTACTS_TAB_STATE', state)
        },
    }
}