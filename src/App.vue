<template>
  <div id="app">
    <img id="temp" :src="require('../src/coollogo_com-314704330-removebg-preview.png')" height="20%" width="20%" style="margin-left:40%;">
    <div id="loginregister">
      <div v-if="!$root.store.username">
        hello guest:
        <router-link :to="{ name: 'register' }" style="color:black; font-weight:bold;">Register</router-link>|
        <router-link :to="{ name: 'login' }" style="color:black; font-weight:bold;">Login</router-link>|
      </div>
      <div v-else id="connectSpan" class="row">
        <b-row style="width:100%; margin-left: 1%;">
          hello {{ $root.store.username }}  |
          <b-col class="a"><b-dropdown id="Personallist" text="Personal" variant="none" class="b">|
            <b-dropdown-item><router-link :to="{ name: 'MyRecipe' }" style="color: black;">My Recipes</router-link></b-dropdown-item>
            <b-dropdown-item><router-link :to="{ name: 'FamilyRecipe' }" style="color: black;">My Family's Recipes</router-link></b-dropdown-item>
            <b-dropdown-item><router-link :to="{ name: 'FavoriteRecipe' }" style="color: black;">My Favorites</router-link></b-dropdown-item>
          </b-dropdown></b-col>
          <b-col style="padding-left: 250px;"><button @click="Logout" id="logBtn" class="b">Logout</button></b-col>
        </b-row>
      </div>
    </div>
    <div id="nav">
      <router-link :to="{ name: 'main' }">Vue Recipes   |</router-link> 
      
      <router-link :to="{ name: 'search' }">Search     |</router-link>
      <router-link :to="{ name: 'about' }">About      |</router-link>
      <span v-if="$root.store.username">
        <router-link :to="{ name: 'createRecipe' }">create new recipe</router-link>|
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$root.store.set_server("https://rony-neta.cs.bgu.ac.il");
  },
  methods: {
    async Logout() {
    // this function handle the log out from the system to the user that currently is logged in
      try {
        const response = await this.axios.post(
          this.$root.store.server_domain +"/Logout",
          
           {withCredentials:true}
        );
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url("../src/main_background.jpg");
  background-size: 100%;
}

#nav {
  background-color:rgba(0,0,0, 0.4);
  padding: 10px;
  text-align: center;
}

#loginregister
{
  background-color:rgba(0,0,0,0.6);
  padding: 10px;
}
#nav a {
  font-weight: bold;
  color: white;
  // color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: red;
  font-weight: bold;
}
#connectSpan
{  
  color: white;
  font-weight: bold;
  font-size: large;
}

#logBtn
{
  margin-left: 80%;
  // position: relative;
}

// #temp
// {
//   margin-left: 40%;
// }

#Personallist
{
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.b{
  color:black; 
  font-weight: bold; 
  border-radius: 5px; 
  border: 1px solid black;
  font-size: 18px;
  background-color: rgb(236, 63, 63);
}

</style>
