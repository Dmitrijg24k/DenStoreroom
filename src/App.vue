<template>
  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"  crossorigin="anonymous">
    <header v-scroll="updateScroll" v-bind:class="{ 'fix-nav': isActive }">
        <div class="menu" >    
           <div class="checkBox">
              <i class="fab fa-js" v-if="!show" @click="show=!show"></i>
              <i class="fab fa-vuejs" v-else @click="show=!show"></i>
            </div>
        </div>
        <nav v-if="show">
          <ul>
            <li><router-link to="/home">+ Home</router-link></li>
            <li><router-link to="/about">+ About Us</router-link></li>
            <li><router-link to="/contact">+ Contact Us</router-link></li>
          </ul>
        </nav>  
    </header>
     <router-view></router-view>
     <p class="Copy">OOO <a href="#">Зовите меня Деминис</a></p>
  </div>

</template>

<script>

export default {
  name: 'app',
  data(){
      return{
        show: true,
        isActive: false,
      }
    },
  methods: {
    updateScroll() {
      if(window.scrollY > 20){
        this.isActive = true;
      } else this.isActive = false;
    }
  }
}
</script>

<style>
 body, html{
   margin: 0;
   padding: 0;
 }
 #app {
  display: block;
  width: 100%;
  height: 50px;
  background-color: #888888; }
  #app header {
    width: 100%;
    display: block;
    padding: 10px 50px;
    background-color: #888888; }
    #app header .checkBox {
      display: none; }
      #app header .checkBox i {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 22px; }
    #app nav ul {
      display: block;
      margin: 0;
      padding: 0; }
      #app nav ul li {
        font-size: 22px;
        display: inline-block;
        margin-right: 30px; }
        #app nav ul li a {
          color: #444444;
          text-decoration: none; }
        #app nav ul li a:hover {
          color: #EEE;
          text-decoration: none; }
  nav {
    position: relative;
  }
  .fix-nav {
    position: fixed;
    z-index: 2; 
  }
  
@media (max-width: 524px) {
  #app header {
    padding: 0px; 
    width: 100%;
  }
    #app header .checkBox {
      margin-left: 50px;
      display: block; }
    #app nav ul {
      display: block;
      margin-top: 10px;
      padding: 0; }
      #app nav ul li {
        text-align: center;
        font-size: 22px;
        display: block;
        margin-right: 0px;
        margin-top: -5px;
        background-color: #97959D; }
        #app nav ul li a {
          padding: 10px;
          display: block;
          color: #444444; }
        #app nav ul li a:hover {
          background-color: #D8D6E1; }
}
          
</style>
