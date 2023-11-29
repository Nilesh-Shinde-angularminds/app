import { createStore } from 'vuex'


export default createStore({

    state: {
        name: 'Nilesh'
    },

    mutations: {
        setName(state, payload) {
            state.name = payload;
        }
    },

})

