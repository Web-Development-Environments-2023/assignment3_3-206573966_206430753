<template>
  <div class="container">
    <b-row>
    <b-col>
    <RecipePreviewList title="Explore these recipes" class="RandomRecipes center" ref="list1"/>

    <button id="refreshB" @click="$refs.list1.updateRecipes()">Show New Recipes</button>
    </b-col>
    <b-col v-if="$root.store.username">
    <LastViewdList
      title="Last Viewed Recipes"
      :class="{
        RandomRecipes: true,
        blur: !$root.store.username,
        center: true
      }"
      disabled
    ></LastViewdList></b-col>
    <b-col v-if="!$root.store.username">
      <LoginComponent style="margin-top:40%; margin-left:40%;"></LoginComponent>
    </b-col>
  </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LastViewdList from "../components/LastViewdList";
import LoginComponent from "../components/LoginComponent";
export default {
  components: {
    RecipePreviewList,
    LastViewdList,
    LoginComponent
  },
  methods: {
    async restert()
    {
      
    }
  
  }
};

</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}

#refreshB{
  color:black; 
  font-weight: bold; 
  border-radius: 5px; 
  padding: 5px; 
  border: 1px solid black;
  font-size: 15px;
  margin-bottom: 10%;
  margin-left: 45%;
  background-color: rgb(236, 63, 63);
}
</style>
