<template>
    <b-container>
      <h3>
        {{ title }}:
        <slot></slot>
      </h3>
      <b-col>
        <b-row v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-row>
      </b-col>
    </b-container>
  </template>
  
  <script>
  import RecipePreview from "./RecipePreview.vue";
  export default {
    name: "RecipePreviewList",
    components: {
      RecipePreview
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {
        try {
          const response = await this.axios.get(
            // this.$root.store.server_domain + "/recipes/random",
            this.$root.store.server_domain+"/users/ThreelastView",
            {withCredentials:true}
          );
  
          console.log(response);
          const recipes = response.data;
          let temp=[]
          recipes.forEach(element => {
            if(element!=null)
            {
                temp.push(element)
            }
          });
          console.log(temp)
          this.recipes = [];
          this.recipes.push(...temp);
          // console.log(this.recipes);
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
  