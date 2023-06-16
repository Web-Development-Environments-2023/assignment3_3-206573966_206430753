<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes</router-link>|
      <router-link :to="{ name: 'search' }">Search</router-link>|
      <router-link :to="{ name: 'about' }">About</router-link>|
      {{ !$root.store.username }}
      <span v-if="!$root.store.username">
        hello guest:
        <router-link :to="{ name: 'register' }">Register</router-link>|
        <router-link :to="{ name: 'login' }">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}: <button @click="Logout">Logout</button>|
        <router-link :to="{ name: 'createRecipe' }">create new recipe</router-link>|
        <div>
        <b-dropdown id="dropdown-1" text="Dropdown Button">
          <b-dropdown-item><router-link :to="{ name: 'MyRecipe' }">My Recipe</router-link></b-dropdown-item>
          <b-dropdown-item><router-link :to="{ name: 'FamilyRecipe' }">My Family Recipe</router-link></b-dropdown-item>
          <b-dropdown-item><router-link :to="{ name: 'FavoriteRecipe' }">Favorites</router-link></b-dropdown-item>
        </b-dropdown>
      </div>
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$root.store.set_server("http://127.0.0.1:3000");
  },
  methods: {
    async Logout() {

      try {
        // this.axios.defaults.withCredentials=true;
        const response = await this.axios.post(
          // "https://test-for-3-2.herokuapp.com/user/Login",
          this.$root.store.server_domain +"/Logout",
          
          // "http://127.0.0.1:3000/Logout",
           {withCredentials:true}
          // "http://132.73.84.100:80/Login",
        );
        // this.axios.defaults.withCredentials=false;
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
    catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
