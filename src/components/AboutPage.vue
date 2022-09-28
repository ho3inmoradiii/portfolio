<template>
    <div class="box">
        <logo-component :dark-mode="true" />
        <power-button />
        <social-icons :dark-mode="true"></social-icons>

        <div class="particle">
            <vue-particles
                    color="#fff"
                    :particleOpacity="0.8"
                    :particlesNumber="150"
                    shapeType="star"
                    :particleSize="4"
                    linesColor="#fff"
                    :linesWidth="1"
                    :lineLinked="true"
                    :lineOpacity="0.8"
                    :linesDistance="100"
                    :moveSpeed="3"
                    :hoverEffect="true"
                    hoverMode="grab"
                    :clickEffect="true"
                    clickMode="push"
            >
            </vue-particles>
        </div>
        
        <div class="spaceman">
            <img src="../assets/images/spaceman.png">
        </div>

        <div class="main">
            I'm a full-stack developer located in Iran. I love to create simple yet beautiful websites with great user experience.
<br/> <br/>
            I'm interested in the whole frontend and backend stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.
<br/> <br />
            I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.
        </div>
        <big-title top="10%" left="5%" text="ABOUT" color="rgba(252, 246, 244,0.1)"></big-title>
    </div>
</template>

<script>
    import LogoComponent from "@/components/subComponent/LogoComponent";
    import PowerButton from "@/components/subComponent/PowerButton";
    import SocialIcons from "@/components/subComponent/SocialIcons";
    import BigTitle from "@/components/subComponent/BigTitle";
    export default {
        name: "AboutPage",
        components: {BigTitle, SocialIcons, PowerButton, LogoComponent}
    }
</script>

<style scoped>
    .box {
        background-color: #000000;
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .particle{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 0;
    }

    .spaceman{
        position: absolute;
        top: 10%;
        right: 5%;
        width: 20vw;
        animation: float 4s ease infinite;
    }

    img{
        width: 100%;
        height: auto;
    }

    @keyframes float {
        0%{
            transform: translateY(-10px);
        }
        50%{
            transform: translateY(15px) translateX(10px);
        }
        100%{
            transform: translateY(-10px);
        }
    }

    .main{
        border: 2px solid #FCF6F4;
        color: #FCF6F4;
        padding: 2rem;
        width: 50vw;
        height: 60vh;
        z-index: 3;
        line-height: 1.5;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: calc(0.6rem + 1vw);
        backdrop-filter: blur(4px);
        position: absolute;
        left: calc(5rem + 5vw);
        top: 10rem;
        font-family: 'Ubuntu Mono',monospace;
        font-style: italic;
    }

    @media screen and (max-width: 992px){
        .main {
            left: calc(8rem + 5vw);
            top: 25rem;
            height: 33vh;
        }
    }

    @media screen and (max-width: 576px){
        .main {
            left: calc(4rem + 5vw);
            top: 11rem;
            height: 50vh;
        }
    }
</style>