<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
<style scoped>
.card{
    border:1px solid gray;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
    padding:1rem;
    margin:2rem auto;
    max-width:40rem
}
</style>