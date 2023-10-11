import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default{
    namespaced: true,
state(){
    return{
        coaches:[
            {
                id: 'c1',
                firstName: 'Fatemeh',
                lastName: 'Mahmoudi',
                areas: ['frontend', 'backend', 'career'],
                description: 'i am Fatemeh im working as a frontend developer',
                hourlyRate: 30,
            },
            {
                id: 'c2',
                firstName: 'omid',
                lastName: 'koushki',
                areas: ['frontend', 'career'],
                description:'i am Omid and im senior developer in ABN Bank',
                hourlyRate: 30,
            }
         ]
    };
},
mutations,
getters,
actions

}