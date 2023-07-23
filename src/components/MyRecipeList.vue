<template>
    <b-container>
      <h3>
        {{ this.title }}
        <slot></slot>
      </h3>
      <b-col>
        <b-row v-for="r in recipes" :key="r.id">
          <MyRecipePreivew class="recipePreview" :recipe="r" />
        </b-row>
      </b-col>
    </b-container>
  </template>
  
  <script>
  import MyRecipePreivew from "./MyRecipePreivew.vue";
  export default {
    name: "RecipePreviewList",
    components: {
        MyRecipePreivew
    },
    // props: {
    //   title: {
    //     type: String,
    //     required: true
    //   }
    // },
    data() {
      return {
        recipes: [],
        title:""
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {
        
          //this function is getting the user recipes list 

        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/returnMyRecipe",{withCredentials:true}
          );
            console.log(response.data)
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          if(this.recipes.length==0)
          {
            this.title="You dont have recipe yet"
          }
        } catch (error) {
          console.log(error);
        }
      }
  
  
      
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    min-height: 400px;
  }
  </style>
  
