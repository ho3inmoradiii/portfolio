<template>
    <h1 :class="['logo', { 'logoDark': isActive, 'darkMode': darkMode }]">H.M</h1>
</template>

<script>
    export default {
        props: {
            isActive: Boolean,
            darkMode: Boolean
        },
        name: "LogoComponent"
    }
</script>

<style scoped>
    .logo{
        display: inline-block;
        color: #000000;
        font-family: 'Pacifico',cursive;
        position: fixed;
        top: 2rem;
        left: 2rem;
        z-index: 3;
    }

    .logoDark{
        color: #FCF6F4;
    }

    .darkMode{
        color: #FCF6F4;
    }
</style>