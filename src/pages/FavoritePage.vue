<template>
    <div>
    <b-container>
      <h1 style="margin-left:28%; padding-top:10px;">
        {{this.titleFavorite}}
        <slot></slot>
      </h1>
      <b-col>
        <div class="a">
        <b-row v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r"/>
        </b-row>
      </div>
      </b-col>
    </b-container>
    </div>
  </template>
  
  <script>
  import RecipePreview from "../components/RecipePreview.vue";
  export default {
    name: "RecipePreviewList",
    components: {
      RecipePreview
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
        titleFavorite:" "
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
      async updateRecipes() {

        // this function will get to the logged in user his favorite recipes 
          
        try {
          const response = await this.axios.get(
            // this.$root.store.server_domain + "/recipes/random",
            this.$root.store.server_domain+"/users/favorites",
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
          if(temp.length>0)
          {
            this.titleFavorite="My Favorites"
          }
          else
          {
            this.titleFavorite="you dont have favorite yet"
          }
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

  .a{
    width: 400px;
  margin-left: 20%;
  }
  </style>
  
