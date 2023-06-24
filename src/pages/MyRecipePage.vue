<template>
    <div class="container">
      <h1 class="title">My Recipe</h1>
      <b-row>
      <b-col>
      <MyRecipeList title="My Recipes" class="RandomRecipes center"/>
      </b-col>
    </b-row>
    </div>
  </template>
  
  <script>
  import MyRecipeList from "../components/MyRecipeList.vue";
  export default {
    components: {
        MyRecipeList
    },
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
  </style>
  
