<template>
  <the-header></the-header>
  <router-view></router-view>
  </template>

  <script>
import TheHeader from '../src/components/layout/TheHeader.vue'

export default {
 components:{
  TheHeader
 }

}


</script>
<style>
*{
  box-sizing:border-box
}
body{
 margin:0
}
html{
  font-family: 'roboto';
  font-size:20px
}

</style>


<!-- <style>

.container{
  width:70%;
  height:250px;
  display:flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  background-color: antiquewhite;
margin:10px auto;
border-radius: 10px;
box-shadow: 2px 3px gainsboro
}
.block{
  width:200px;
  height:150px;
  background-color: blueviolet;
  margin-bottom: 20px;
  /* transition:transform 0.45s ease-out; */
}
.animate{
  /* transform:translateX(-100px) */
  animation: slide-fade 1s ease-out ;
}
/* @keyframes slide-scale{
0%{
  transform:translateX(0) scale(1);
}
60%{
  transform:translateX(-100px) scale(1.3);
}
100%{
  transform:translateX(-150px)scale(0.5)
}
}
.para-enter-from{
  /* opacity:0;
transform:translateY(-20px)  
}
/* .para-enter-active{
  /* transition:all 0.45s ease-out; */
  /* animation:slide-scale 2s ease-in; */
/* }  */
.para-enter-to{
  /* opacity:1;
  transform: translateY(0); */
}
.para-leave-from{
  /* opacity:1;
  transfrom:translateY(0) */
}
.para-leave-active{
  /* transition:all 1s ease-in; */
  /* animation:slide-scale 1.5s ease-out; */
}
.para-leave-to{
  /* opacity:0;
  transform: translateY(30px); */
} 

@keyframes model{
    from{
        opacity:0;
     tranfrom:translateY(-50px) scale(0.5)
    }
    to{
        opacity:1;
        transform:translateY(0px) scale(1.2)
    }
  }
  .fade-button-enter-from,
  .fade-button-leave-to{
    opacity:0
  }
  .fade-button-enter-active{
    transition:opacity 0.45s ease-out;
  }
  .fade-button-enter-to,.fade-button-leave-from{
    opacity:1
  }
  
  .fade-button-leave-active{
    transition:opacity 0.45s ease-in;
  }
 
.router-link-active{
  color:red
}

.router-link-exact-active{
color:green
}
.marg-r{
  margin-right:10px;
  font-size: 25px;
}
div .invalid label{
  color:red
}
div .invalid input{
  border-color: red;
}
div .invalid p{
  color:red
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
span{
  border:3px solid yellow
}
#controls{
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top:50px;
}
.list{
  font-size:20px;
}
.logo--me{
  color:red
}
.logo--you{
  color:purple
}
.mons{
font-size:30px;
}
h2{
 padding-top:10px;
}
.logogreen{
  color:green
}
.logoorange{
  color:orange
}
button{
  background-color: tomato;
  width:150px;
  height:50px;
  font-size: 20px;
  color:white;
  border:1px solid tomato;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow:2px 2px 2px rgb(234, 146, 246)
}
header{
  background-color: darkviolet;
  color:white;
  height:70px;
  border-radius: 10px;
  margin:auto;
  text-align: center;
  justify-content: center;
}

.container1{
  /* width:80rw; */
  background-color:cadetblue;
  margin: 10px auto;
  border-radius: 10px;
  font-size:20px;
  box-shadow: 2px 3px rgb(77, 122, 123);
}
.healthbar{
  width:90%;
  height:50px;
  text-align: center;
  justify-content: center;
  align-content: center;
  margin:auto;
  /* border:3px solid greenyellow */
}
.healthbar-value{
  width:100%;
  height:100%;
  background-color:forestgreen;
  border-radius: 10px;
}
li{
  list-style: none;
}

</style> -->
