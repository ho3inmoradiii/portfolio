<template>
    <div class="main-container">
        <div class="dark-div" :class="['dark-div', { 'dark-div-b' : !isActive }]"></div>
        <div class="container">
            <logo-component :is-active="isActive" :dark-mode="false" />
            <power-button />
            <social-icons :is-active="isActive" :dark-mode="false"></social-icons>



            <button class="center" @click="click" :class="['center', { 'center-b' : isActive }]">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="yin-yang"
                     :class="['x','fa-yin-yang','fa-w-16','center-svg', { 'center-svg-b' : isActive }]" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="currentColor"
                          d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
                </svg>
                <span :class="['span-center', { 'span-center-b' : isActive }]">click here</span>
            </button>

            <a :class="['contact', { 'contact-b' : isActive }]" href="mailto:ho3inmoradi1998@gmail.com" target="_blank">
                <h2>
                    Say hi...
                </h2>
            </a>

            <router-link to="/blog" class="blog" :style="[isActive ? {'top': '55%'} : {'top': '50%'}]">
                <h2>
                    Blog
                </h2>
            </router-link>

            <router-link to="/work" :class="['work', { 'work-b' : isActive }]" :style="[isActive ? {'top': '45%'} : {'top': '50%'}]">
                <h2>
                    Work
                </h2>
            </router-link>

            <div class="bottom-bar">
                <router-link to="/about" :class="['about', { 'about-b' : isActive }]">
                    <h2>
                        About.
                    </h2>
                </router-link>

                <router-link to="/skills" class="skills">
                    <h2>
                        My Skills.
                    </h2>
                </router-link>
            </div>
        </div>
        <intro :class="['introOn', { 'introOff' : !isActive }]" />
    </div>
</template>

<script>
    import PowerButton from "@/components/subComponent/PowerButton";
    import LogoComponent from "@/components/subComponent/LogoComponent";
    import SocialIcons from "@/components/subComponent/SocialIcons";
    import intro from "@/components/intro";

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Main",
        components: {
            PowerButton,
            LogoComponent,
            SocialIcons,
            intro
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            click() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>
    .main-container {
        background-color: #FCF6F4;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }

    h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        font-weight: 500;
    }

    .container {
        padding: 2rem;
    }

    .contact {
        color: #000000;
        position: absolute;
        top: 2rem;
        right: calc(1rem + 2vw);
        text-decoration: none;
        z-index: 1;
        transition: all 0.2s ease;
    }

    .contact:hover, .about:hover, .skills:hover {
        transform: scale(1.3);
    }

    .blog:hover{
        transform: scale(1.3) rotate(90deg) translate(-50%, -50%);
    }

    .work:hover{
        transform: scale(1.3) translate(-50%, -50%) rotate(-90deg);
    }

    .blog {
        color: #000000;
        position: absolute;
        top: 50%;
        transform: rotate(90deg) translate(-50%, -50%);
        right: calc(1rem + 2vw);
        text-decoration: none;
        z-index: 1;
        transition: all 0.2s ease;
    }

    .work {
         color: #000000;
         position: absolute;
         top: 50%;
         transform: translate(-50%, -50%) rotate(-90deg);
         left: calc(1rem + 2vw);
         text-decoration: none;
         z-index: 1;
        transition: all 0.5s ease;
     }

    .work-b {
        color: #FCF6F4;
    }

    .bottom-bar {
        position: absolute;
        bottom: 1rem;
        left: 0;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .about, .skills {
        color: #000000;
        text-decoration: none;
        z-index: 1;
        transition: all 0.5s ease;
    }

    .about-b{
        color: #FCF6F4;
    }

    .center {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: all 1s ease;
    }

    .center-svg {
        width: 200px;
        height: 200px;
    }

    .center-svg-b {
        width: 120px;
        height: 120px;
    }

    /*.center-a{*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*}*/

    .center-b {
        position: absolute;
        transform: translate(-50%, -50%);
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        top: 85%;
        left: 92%;
    }

    .center > :first-child {
        animation: rotate infinite 1.5s linear;
    }

    .center .span-center {
        padding-top: 1rem;
        display: inline-block;
    }

    .center .span-center-b {
        display: none;
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .dark-div{
        position: absolute;
        top: 0;
        bottom: 0;
        right: 50%;
        width: 50%;
        height: 100%;
        z-index: 1;
        background-color: #000;
        transition: height 0.5s ease, width 1s ease 0.5s;
    }

    .dark-div-b{
        width: 0;
        height: 0;
    }

    .introOn{
        display: flex;
    }

    .introOff{
        display: none;
    }

    @media screen and (max-width: 992px) {
        .dark-div{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            height: 50%;
            z-index: 1;
            background-color: #000;
            transition: width 0.5s ease, height 1s ease 0.5s;
        }

        .dark-div-b{
            width: 0;
            height: 0;
        }

        .introOn{
            flex-direction: column;
        }

        .about-b{
            color: #000000;
        }

        .center-b{
            top: 94%;
            left: 90%;
        }

        .contact-b{
            color: #FCF6F4;
        }
    }

    @media screen and (max-width: 768px){
        .center-b{
            top: 87%;
            left: 87%;
        }

        .center-svg-b{
            width: 90px;
            height: 90px;
        }

        .contact,.contact-b{
            top: 2.5rem;
        }
    }
</style>