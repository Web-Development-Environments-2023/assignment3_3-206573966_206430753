<template>
    <b-container>
      <h3 style="text-align: center;">
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

          // this function will get the user last viewed recipes for the user that is currently logged in
        try {
          const response = await this.axios.get(
            // this.$root.store.server_domain + "/recipes/random",
            this.$root.store.server_domain+"/users/ThreelastView",
            {withCredentials:true}
          );
          const recipes = response.data;
          console.log(response.data)
          let temp=[]
          recipes.forEach(element => {
            if(element!=null)
            {
                temp.push(element)
            }
          });
          // console.log(temp)
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
    width: 600px;
    padding-left:50px;
    padding-right:50px;
    padding-bottom:5px;
    padding-top:5px;
  }
  </style>
  
