<template>
    <b-container>
      <h3>
        {{ this.title }}
        <slot></slot>
      </h3>
      <b-col>
        <b-row v-for="r in recipes" :key="r.id">
          <MyFamilyPreiview class="recipePreview" :recipe="r" />
        </b-row>
      </b-col>
    </b-container>
  </template>
  
  <script>
  import MyFamilyPreiview from "./MyFamilyPreiview.vue";
  export default {
    name: "RecipePreviewList",
    components: {
        MyFamilyPreiview
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

          //this function is getting the user family recipes list 
        try {
          const response = await this.axios.get(
            this.$root.store.server_domain + "/users/returnMyFamilyRecipe",{withCredentials:true}
          );
          console.log(response.data)
          const recipes = response.data;
          this.recipes = [];
          this.recipes.push(...recipes);
          if(this.recipes.length==0)
          {
            this.title="You dont have Family recipes yet"
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
  
