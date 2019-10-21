<template>
    <div class="home">
        <h2>Our collective</h2>
        <carousel :items="3" :stagePadding="20" :loop="true" :margin="10" :responsive="{0:{items:1,nav:false},500:{items:2,nav:true},700:{items:3,nav:true},1000:{items:4,nav:true}}" >

        <img src="../assets/Meet__our1.jpg">

        <img src="../assets/Meet__our2.jpg">

        <img src="../assets/Meet__our3.jpg">

        <img src="../assets/Meet__our4.jpg">

        <img src="../assets/Meet__our1.jpg">

        <img src="../assets/Meet__our2.jpg">

        <img src="../assets/Meet__our3.jpg">

        <img src="../assets/Meet__our4.jpg">
    </carousel>
    </div>
    
</template>

<script>
import carousel from 'vue-owl-carousel'

export default {
    components: { carousel },
}
</script>

<style scoped>
    .home{
        padding-top: 40px;
    }
</style>