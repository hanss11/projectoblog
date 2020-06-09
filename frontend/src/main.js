import Vue from "vue";  
import VueApollo from "vue-apollo";  
import VueRouter from "vue-router";

import apolloClient from "./vue-apollo";

import App from "./App.vue";

import VueInstagram from 'vue-instagram'
Vue.use(VueInstagram);

Vue.use(VueApollo);  
Vue.use(VueRouter);  
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({  
  defaultClient: apolloClient
});

const router = new VueRouter({  
  mode: "history",
  routes: [
    {
      path: "/",
      components: require("./containers/Articles.vue")
    },
    {
      path: "/article/:id",
      components: require("./containers/Article.vue")
    },
    {
      path: "/category/:id",
      components: require("./containers/Category.vue")
    },
    {
      path: "/about",
      name: "about",
      components: require("./views/About.vue")
    }
  ]
});

new Vue({  
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");