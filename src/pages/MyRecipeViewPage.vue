<template>
    <div class="container">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1>{{ recipe.recipe_name }}</h1>
          <img :src="recipe.img" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
              <div class="mb-3">
                <div>Ready in {{ recipe.recipe_time }} minutes</div>
                <div>Likes: {{ recipe.popularity }} likes</div>
                <!-- <div> {{ recipe.courses_num }} servings</div> -->
                <div> {{ recipe.vegan }} vegan</div>
                <div> {{ recipe.vegetarian }} vegetarian</div>
                <div> {{ recipe.gloten }} glutenFree</div>
                <div> ingridiants: {{ recipe.ingridiants }} </div>
                <div> instructions: {{ recipe.instructions }} </div>
              </div>
              <!-- Ingredients:
              <ul>
                <li
                  v-for="(r, index) in recipe.extendedIngredients"
                  :key="index + '_' + r.id"
                >
                  {{ r.original }}
                </li>
              </ul> -->
            </div>
            <!-- <div class="wrapped">
              Instructions:
              <ol>
                <li v-for="s in recipe._instructions" :key="s.number">
                  {{ s.step }}
                </li>
              </ol>
            </div> -->
          </div>
        </div>
        <!-- <pre>
        {{ $route.params }}
        {{ recipe }}
      </pre
        > -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        recipe: null
      };
    },
    async created() {
      try {
        let response;
  
        try {

          console.log(this.$route.params.recipeId)
          console.log(this.$route.params.recipeId)

          response = await this.axios.get(

            this.$root.store.server_domain +"/users/returnMyFullRecipe/"+this.$route.params.recipeId,

            {withCredentials:true}
          );

          console.log(response)
          console.log(response.data);
          console.log("heeeee")
          if (response.status !== 200) this.$router.replace("/NotFound");
        } catch (error) {
          console.log("error.response.status", error.response.status);
          this.$router.replace("/NotFound");
          return;
        }
  
        let {
          instructions,
          popularity,
          ingridiants,
          recipe_time,
          img,
          recipe_name,
          courses_num,
          vegan,
          vegetarian,
          gloten
        } = response.data;
  
        // let _instructions = instructions
        //   .map((fstep) => {
        //     fstep.steps[0].step = fstep.name + fstep.steps[0].step;
        //     return fstep.steps;
        //   })
        //   .reduce((a, b) => [...a, ...b], []);
  
        let _recipe = {
          // instructions,
        //   _instructions,
        //   analyzedInstructions,
        //   extendedIngredients,
        //   popularity,
        //   readyInMinutes,
        //   image,
        //   title,
        //   servings,
        //   vegan,
        //   vegetarian,
        //   glutenFree
          //   analyzedInstructions,
          // instructions,
        //   extendedIngredients,
          instructions,
          ingridiants,
          popularity,
          recipe_time,
          img,
          recipe_name,
          courses_num,
          vegan,
          vegetarian,
          gloten
        };
  
        this.recipe = _recipe;
      } catch (error) {
        console.log(error);
      }
    }
  };
  </script>
  
  <style scoped>
  .wrapper {
    display: flex;
  }
  .wrapped {
    width: 50%;
  }
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
  /* .recipe-header{
  
  } */
  </style>
  