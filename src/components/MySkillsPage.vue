<template>
    <div class="box">
        <logo-component></logo-component>
        <social-icons></social-icons>
        <power-button></power-button>
        <particle-component></particle-component>
        <div class="main">
            <h2 class="title">
                <svg width="40" height="40" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette"
                     class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512">
                    <path fill="currentColor"
                          d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path>
                </svg>
                Front-end
            </h2>
            <div class="description">
                I love to create design which speaks, Keep it clean, minimal and simple.
            </div>
            <div class="description">
                <strong>Skills</strong>
                <p>Html, Css, Js, Vue, Vuex, Sass, Bootstrap, Tailwind, Firebase etc.</p>
            </div>
        </div>
        <div class="main">
            <h2 class="title">
                <svg width="40" height="40" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code"
                      class="svg-inline--fa fa-laptop-code fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512">
                    <path fill="currentColor"
                          d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                </svg>
                Back-end
            </h2>
            <div class="description">
                I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
            </div>
            <div class="description">
                <strong>Skills</strong>
                <p>Php, Laravel, OOP, Solid Principles, Laravel Nova, MongoDB, Redis, MySql etc.</p>
            </div>
        </div>
<!--        <big-title top="80%" right="30%" text="SKILLS" color="rgba(0,0,0,0.1)"></big-title>-->
    </div>
</template>

<script>
    import LogoComponent from "@/components/subComponent/LogoComponent";
    import SocialIcons from "@/components/subComponent/SocialIcons";
    import PowerButton from "@/components/subComponent/PowerButton";
    import ParticleComponent from "@/components/subComponent/ParticleComponent";
    // import BigTitle from "@/components/subComponent/BigTitle";
    export default {
        name: "MySkillsPage",
        components: {ParticleComponent, PowerButton, SocialIcons, LogoComponent},
    }
</script>

<style scoped>
    .box {
        background-color: #FCF6F4;
        width: 100vw;
        height: 110vh;
        position: relative;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .main {
        border: 2px solid #000000;
        color: #000000;
        background-color: #FCF6F4;
        padding: 2rem;
        width: 30vw;
        height: 60vh;
        z-index: 3;
        line-height: 1.5;
        font-family: 'Ubuntu Mono', monospace;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

    .main:hover{
        color: #FCF6F4;
        background-color: #000000;
    }

    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(1em + 1vw);
    }

    .main:hover .title>*{
        fill: #FCF6F4;
    }

    .title>*:first-child{
        margin-right: 1rem;
    }

    .description{
        color: #000000;
        font-size: calc(0.6em + 1vw);
        padding: 1.5rem 0;
    }

    .main:hover .description{
        color: #FCF6F4;
    }

    .description strong{
        margin-bottom: 1rem;
        margin-top: 1rem;
        text-transform: uppercase;
    }

    p{
        margin-left: 2rem;
    }

    @media screen and (max-width: 992px) {
        .box {
            flex-direction: column;
        }

        .main{
            height: 30vh;
        }
    }

    @media screen and (max-width: 768px) {
        .main{
            height: 30vh;
            width: 50vw;
        }
    }

    @media screen and (max-width: 577px) {
        .box {
            height: 125vh;
        }

        .description {
            padding: 1rem 0;
        }

        .main {
            height: 37vh;
        }
    }
</style>