<template>
    <header>
        <nav>
            <router-link to="/coaches">Find a Coach</router-link>
            <ul>
                <li>
                <router-link to="/coaches">All Coaches</router-link>
                </li>
                <li>
                <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
        
        </nav>
    </header>
</template>
<style scoped>
header{
    width:100%;
    height:5rem;
    background-color: rgb(53, 6, 97);
    display:flex;
    justify-content:center;
    align-items: center;
}
header nav{
    width:90%;
    margin:auto;
    padding:0;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
header a{
    text-decoration:none;
    color:rgb(205, 141, 193);
    padding:0.75rem 1.5rem;
    border:1px solid transparent;
}

 a:hover,
 a:active,
 a.router-link-active
 {
    border:1px solid rgb(205, 141, 193)
}
header ul{
display:flex;
justify-content: space-between;
align-items: center;
margin:0;
padding:0;
list-style: none;
}
h1 a{
    color:white;
    margin:0
}
h1 a:active,
h1 a:hover,
h1 a.router-link-active{
    border-color:transparent
}
li{
    margin:0 0.5rem
}
</style>