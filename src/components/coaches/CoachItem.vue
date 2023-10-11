<template>
    <li>
    <h1> {{ fullName }} </h1>
    <h3> ${{ rate }}/hour </h3>
    <div>
    <base-badge  v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
    </div>
    <div class="actions">
        <base-button link  :to="coachDetailsLink">View Details</base-button>
        <base-button link  mode="outline" :to="coachContactLink">Contact</base-button>
    </div>

     
    </li>
</template>
<script>


export default {
  props:['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed:{
    fullName(){
        return this.firstName+''+this.lastName
    },
    coachContactLink(){
     return this.$route.path+'/'+ this.id + '/contact'
    },
    coachDetailsLink(){
      return this.$route.path+'/'+ this.id
    }

  }
}
</script>
<style scoped>
li{
    border:1px solid  rgb(227, 224, 224);
   border-radius: 10px;
   margin:13px;
   padding:5px
}
.actions{

    flex-direction:row-reverse;
    display:flex;
    margin-bottom: 20px;
    

}
</style>
