<template>
    <div class="Grid">
        <a v-for="post in posts" :key="post.id" class="box" target="_blank" :href="post.link">
            <div class="image" :style="{ backgroundImage: `url(${post.imgSrc})` }" />
            <h3 class="title">{{ post.name }}</h3>
            <div class="hashtags">
                <span class="tag" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
            </div>
            <span class="date">{{ post.date }}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BlogComponent",
        props:['posts'],
    }
</script>

<style scoped>
    .box{
        width: calc(10rem + 15vw);
        text-decoration: none;
        height: 24rem;
        padding: 1rem;
        color: #000000;
        border: 2px solid #000000;
        backdrop-filter: blur(2px);
        box-shadow: 0 0 1rem 0 rgba(0,0,0,0.2);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        z-index: 5;
    }

    .box:hover{
        color: #FCF6F4;
        background-color: #000000;
        transition: all 0.3s ease;
    }

    .Grid{
        display: grid;
        grid-template-columns: repeat(2,minmax(calc(10rem + 15vw),1fr));
        grid-gap: calc(1rem + 2vw);
    }

    @media screen and (max-width: 577px){
        .Grid{
            display: flex;
            flex-direction: column;
        }

        .box{
            margin-bottom: 20px;
        }
    }

    .image{
        width: 100%;
        height: 60%;
        background-size: cover;
        border: 1px solid transparent;
        background-position: center center;
    }

    .box:hover .image{
        border: 1px solid #FCF6F4;
    }

    .title{
        color: inherit;
        padding: 0.5rem 0;
        padding-top: 1rem;
        font-family: 'Karla',sans-serif;
        font-weight: 700;
        border-bottom: 1px solid #000000;
    }

    .box:hover .title{
        color: #FCF6F4;
    }

    .hashtags{
        padding: 0.5rem 0;
    }

    .tag{
        padding-right: 0.5rem;
    }

    .date{
        padding-right: 0.5rem 0;
    }
</style>