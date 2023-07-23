<template>
  <div>
  <h1></h1>
  <div class="container"  >
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 style="text-align:center;">{{ recipe.title }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>This recipe will be ready in {{ recipe.readyInMinutes }} minutes</div>
              <div> This recipe makes {{ recipe.servings }} servings</div>
              <div>&#128077; {{ recipe.popularity }} likes</div>
              <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
                  <label v-if="recipe.gloten" style="background-color:rgb(151, 77, 34); " >Gluten Free</label>
                  <label v-if="recipe.vegan" style="background-color:rgb(154, 218, 95); ">Vegan</label>
                  <label v-if="recipe.vegetarian" style="background-color:rgb(21, 112, 25); ">Vegeterian</label>
              </div>
            </div>
            <p style="text-decoration-line: underline;">Ingredients:</p>
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >
                {{ r.original }}
              </li>
            </ul>
          </div>
          <div class="wrapped">
            <p  style="text-decoration-line: underline;">Instructions:</p>
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">
                {{ s.step }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
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
   // this function will return recipe information according to recipe id

    try {
      let response;

      try {
        console.log(this.$root.store.server_domain + "/recipes/getFullRecipe")
        console.log(this.$route.params.recipeId)
        response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/getFullRecipe/"+this.$route.params.recipeId,
          {withCredentials:true}
        );
        if(this.$root.store.username){
          await this.axios.post(this.$root.store.server_domain+"/users/UserViewed",
          {
            recipeId: this.$route.params.recipeId
            } ,{withCredentials:true}
          );
        }
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        servings,
        vegan,
        vegetarian,
        glutenFree
      } = response.data;


      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        // instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        popularity,
        readyInMinutes,
        image,
        title,
        servings,
        vegan,
        vegetarian,
        glutenFree
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }

  }
};
</script>

<style scoped>
.container{
  background-color:rgba(0,0,0, 0.2);
  border: 10px solid black;
  font-weight: bold;
}
.wrapper {
  display: flex;
}
.wrapped {
  width: 40%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  max-height: 300px;
}

label{
    color:black; 
    font-weight: bold; 
    border-radius: 5px; 
    padding: 5px; 
    border: 1px solid black;
    font-size: 12px;
  }
</style>
