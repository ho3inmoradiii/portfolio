<template>
    <div class="particle">
        <vue-particles
                color="#000"
                :particleOpacity="0.9"
                :particlesNumber="150"
                shapeType="star"
                :particleSize="4"
                linesColor="#000"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.5"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
        >
        </vue-particles>
    </div>
</template>

<script>
    export default {
        name: "ParticleComponent"
    }
</script>

<style scoped>
    .particle{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 0;
    }
</style>