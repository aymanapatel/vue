import {defineStore} from "pinia"


export const useCounterStore = defineStore("LoginStore", {
    // Data
    state: () => ({
        firstName: 'Ayman',
        lastName: 'Patel',
        loggedIn: false,
    }),
    // Computed
    getters: {
        fullName: (state) => {
            return `${state.firstName} ${state.lastName}`
        }
    },

    // Methods
    actions: {
        
    }
})