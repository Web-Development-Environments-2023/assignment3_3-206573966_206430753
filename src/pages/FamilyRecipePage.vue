<template>
    <div class="container">
      <h1 class="title" style="margin-left:24%; padding-top:10px;">My Family's Recipes</h1>
      <b-row>
      <b-col>
      <MyFamilyRecipeList title="My Family Recipe" class="RandomRecipes center" style="margin-left: 10%;"/>
      </b-col>
    </b-row>
    </div>
  </template>
  
  <script>
  import MyFamilyRecipeList from "../components/MyFamilyRecipeList.vue";
  export default {
    components: {
        MyFamilyRecipeList
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
  
