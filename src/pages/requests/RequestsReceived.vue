<template>
    <base-card>
    <header>
        <h2>Requests Received</h2>
    </header>
    <ul v-if="hasRequests">
     <request-item  v-for="req in receivedRequests" :key="req.id" :email="req.userEmail" :message="req.message"></request-item>
    </ul>
    <h3 v-else>you havent recieved any requests yet!</h3>
    </base-card>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue'
export default{
    components:{
        RequestItem
    },
    computed:{
        receivedRequests(){
            return this.$store.getters['requests/requests']
        },
        // recievedrequests(){
        //     return this.$store.getters[requests/requests]
        // },
        hasRequests(){
            return this.$store.getters['requests/hasRequests']
        }
    },
    created(){
        this.loadRequests()
    },
    methods:{
    async loadRequests(){
       await this.$store.dispatch('requests/fetchRequests')
    }
    }
}
</script>
<style scoped>
 header{
        text-align:center
    }
    ul{
        list-style:none;
        margin:2rem auto;
        padding:0;
        max-width:30rem
    }
    h3{
        text-align:center
    }

</style>