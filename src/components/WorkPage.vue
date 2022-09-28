<template>
    <div class="box1" ref="scroll_container">
        <logo-component :dark-mode="true" />
        <power-button />
        <social-icons :dark-mode="true"></social-icons>

        <div id="ref" class="main">
            <card-component :works="work" />
        </div>
        <div class="rotate">
            <svg width="80" height="80" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="yin-yang"
                 :class="['x','fa-yin-yang','fa-w-16']" role="img"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" id="yinyang">
                <path fill="#FCF6F4"
                      d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
            </svg>
        </div>
        <big-title top="10%" right="20%" text="WORK" color="rgba(252, 246, 244,0.1)"></big-title>
        <p class="more">For more scroll down...</p>
    </div>
</template>

<script>
    import LogoComponent from "@/components/subComponent/LogoComponent";
    import PowerButton from "@/components/subComponent/PowerButton";
    import SocialIcons from "@/components/subComponent/SocialIcons";
    import CardComponent from "@/components/subComponent/CardComponent";
    import BigTitle from "@/components/subComponent/BigTitle";
    export default {
        name: "WorkPage",
        components: {BigTitle, CardComponent, SocialIcons, PowerButton, LogoComponent},
        data(){
            return{
                work:[
                    {
                        id:1,
                        name:"Agency Landing Page",
                        description:"It is build on top of the React JS, with styledComponents and GSAP for smooth scrolling animations.",
                        tags:["react","gsap","styledComponents"],

                        demo:"https://agency-website-eta.vercel.app/",
                        github:"https://github.com/codebucks27/Agency-website"
                    },
                    {
                        id:2,
                        name:"Job listing website",
                        description:"A Job listing website build in ReactJS. With searching and filtering functionalities.",
                        tags:["react","sass"],

                        demo:"http://react-job-listing-website.codebucks27.vercel.app/",
                        github:"https://github.com/codebucks27/react-job-listing-website"

                    },
                    {
                        id:3,
                        name:"Dev.to Clone",
                        description:"A clone of Dev.to build using ReactJS. With realtime fetching of articles from dev.to using API.",
                        tags:["react","api","sass"],

                        demo:"http://devto-clone-codebucks27.vercel.app/",
                        github:"https://github.com/codebucks27/devto-clone"
                    },
                    {
                        id:4,
                        name:"Sidebar Menu",
                        description:"A cool looking sidebar menu build using ReactJS and styledComponents.It has really smooth animations.",
                        tags:["react","styledComponents","react-router"],

                        demo:"https://react-sidebar.vercel.app/",
                        github:"https://github.com/codebucks27/react-sidebar"

                    },{
                        id:5,
                        name:"Todo App(React + Redux)",
                        description:"A todo app build using Redux-toolkit and framer-motion for smooth animations.",
                        tags:["react","redux","framer-motion"],

                        demo:"http://react-redux-todo-app-git-main-codebucks27.vercel.app/",
                        github:"https://github.com/codebucks27/React-Redux-Todo-App"

                    },
                    {
                        id:6,
                        name:"Responsive Navigation Menu",
                        description:"A reponsive navbar menu component in ReactJS with react-router functionalities. Built from scratch.",
                        tags:["react","react-router","css"],

                        demo:"http://react-responsive-navbar-codebucks27.vercel.app/",
                        github:"https://github.com/codebucks27/React-responsive-navbar"

                    },
                ]
            }
        },
        methods:{
            rotate(){
                // let $refs = this.$refs['scroll_container'];
                // element.style.transform = `translateX(${-window.pageYOffset}px)`
                // this.$refs.scroll_container.style.transform = `translateX(-300px)`
                document.getElementById("ref").style.transform = `translateX(${-window.pageYOffset}px)`
                document.getElementById("yinyang").style.transform = `rotate(` + -window.pageYOffset + 'deg)'
            }
        },
        mounted() {
            window.addEventListener('scroll',this.rotate)
            // window.removeEventListener('scroll',this.rotate)
            // console.log(this.$refs.style.transform)
            // this.rotate()
            // let element = this.$refs.scroll_container.curret;
            //
            // const rotate = () => {
            //     element.style.transform = `translateX(${-window.pageYOffset}px)`
            // }
            //
            // window.addEventListener('scroll',rotate)
            // return () => window.removeEventListener('scroll',rotate)
        }
    }
</script>

<style scoped>
    .box1 {
        background-color: #000000;
        height: 400vh;
        position: relative;
        display: flex;
        align-items: center;
    }

    .main{
        position: fixed;
        top: 4rem;
        left: calc(10rem + 15vw);
        height: 40vh;
        display: flex;
    }

    .rotate{
        display: block;
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        width: 80px;
        height: 80px;
        z-index: 1;
    }

    .more{
        position: fixed;
        bottom: 34%;
        color: rgba(252,246,244,0.3);
        font-size: calc(1.5em + 1.5vw);
        z-index: 0;
        right: 1%;
    }

    @media screen and (max-width: 992px){
        .box1 {
            height: 320vh;
        }
    }

    @media screen and (max-width: 768px){
        .box1 {
            height: 460vh;
        }

        .main{
            top: 4rem;
        }
    }

</style>