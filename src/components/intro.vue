<template>
    <div class="box">
        <div class="subBox">
            <div class="text">
                <h1>Hi,</h1>
                <h3>I`m Hossein Moradi.</h3>
                <h6>I design and code simple yet beautiful websites.</h6>
            </div>
        </div>
        <div class="subBox1">
            <div class="pic">
                <img src="../assets/images/profile-img.png" alt="Profile picture">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "intro",
        props:{
            isActive: Boolean
        }
    }
</script>

<style scoped>
    .box{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 65vw;
        height: 54vh;
        display: flex;
        background: linear-gradient(
        to right,
        #FCF6F4 50%,
        #000000 50%
        ) bottom,
        linear-gradient(
                to right,
                #FCF6F4 50%,
                #000000 50%
        ) top;

        border-left: 2px solid #FCF6F4;
        border-right: 2px solid #000000;

        background-repeat: no-repeat;
        background-size: 100% 2px;
        z-index: 1;
    }

    .subBox{
        width: 50%;
        position: relative;
        display: flex;
    }

    .subBox1{
        position: relative;
    }

    .subBox1 .pic{
        display: flex;
        height: 100%;
        justify-content: center;
    }

    @media screen and (min-width: 993px){
        .subBox1{
            position: static;
            text-align: center;
            width: 50%;
        }

        .subBox1 .pic img{
            width: 360px;
        }
    }

    .text{
        font-size: calc(1em + 1.5vw);
        color: #FCF6F4;
        padding: 2rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .text>*:last-child{
        color: rgba(252, 246, 244, 0.6);
        font-size: calc(0.5em + 1.5vw);
        font-weight: 300;
    }

    @media screen and (max-width: 992px) {
        .box{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 65vw;
            height: 54vh;
            display: flex;
            background: none;
            border-left: 0;
            border-right: 0;
            background-size: 100% 2px;
            z-index: 1;
        }

        .subBox{
            width: 100%;
            height: 50%;
            border: 2px solid #FCF6F4;
        }

        .subBox1{
            width: 100%;
            text-align: center;
            height: 50%;
            border: 2px solid #000000;
            border-top: 0;
        }

        .subBox1 .pic{
            position: static;
            left: 0;
            transform: translate(0);
            display: flex;
            justify-content: center;
            height: 100%;
        }

        .subBox1 .pic img{
            width: 272px;
        }
    }
</style>