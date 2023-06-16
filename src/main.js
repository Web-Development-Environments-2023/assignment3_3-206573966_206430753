import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

import routes from "./routes";
import VueRouter from "vue-router";

import VueCookies from "vue-cookies";
Vue.use(VueCookies);


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});

import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);

axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  last_string_search:localStorage.last_string_search,
  last_recipe_search:localStorage.last_recipe_search,
  server_domain:localStorage.server_domain,
  username: localStorage.username,
  user_id: localStorage.user_id,
  login(username,user_id) {
    localStorage.setItem("username", username);
    localStorage.setItem("user_id", user_id);
    this.username = username;
    this.user_id = user_id; 
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    localStorage.removeItem("last_string_search");
    localStorage.removeItem("last_recipe_search");
    this.username = undefined;
    this.user_id = undefined;
    this.last_string_search = undefined;
    this.last_recipe_search = undefined;
  },
  set_server(path)
  {
    localStorage.setItem("server_domain",path);
    this.server_domain = path;
  },
  set_lastViewd(str,rec)
  {
    localStorage.setItem("last_string_search",str);
    localStorage.setItem("last_recipe_search",rec);
    this.last_string_search = str;
    this.last_recipe_search = rec;
  }
  
};
console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
