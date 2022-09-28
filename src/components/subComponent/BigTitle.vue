<template>
    <div class="title" :style="{ 'top': top, 'right': right, 'color': color, 'left': left }">{{ text }}</div>
</template>

<script>
    export default {
        name: "BigTitle",
        props:['text','top','right','color','left']
    }
</script>

<style scoped>
    .title{
        position: fixed;
        /*color: rgba(252, 246, 244,0.1);*/
        font-size: calc(5em + 5vw);
        z-index: 0;
    }
</style>