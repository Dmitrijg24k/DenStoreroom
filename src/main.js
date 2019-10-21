import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'



import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'



Vue.config.productionTip = false


Vue.use(VueRouter)

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})



let router = new VueRouter({
  routes: [
    { path: "/", component: Home},
    { path: "/home", component: Home},
    { path: '/about', component: About},
    { path: '/contact', component: Contact}
  ]
})

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
