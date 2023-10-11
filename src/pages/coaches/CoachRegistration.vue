<template>
<base-card>
  <h3>Register As a Coach Now</h3>
  <coach-form @save-data="saveData"></coach-form>
</base-card>
</template>
<script>

import CoachForm from '../../components/coaches/CoachForm.vue'

export default {
    components:{ CoachForm },
    methods:{
        saveData(data){
            this.$store.dispatch('coaches/registerCoach', data)
            this.$router.replace('/coaches')
            
        }
        
    }
}
</script>

