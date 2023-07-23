<template>
    <div class="container">
      <div v-if="recipe">
        <div class="recipe-header mt-3 mb-4">
          <h1 style="text-align:center;">{{ recipe.recipe_name }}</h1>
          <br>
          <img :src="recipe.img" class="center" />
        </div>
        <div class="recipe-body">
          <div class="wrapper">
            <div class="wrapped">
              <div class="row">
              <div class="col">
              <div class="mb-3">
                <div>This recipe will be ready in {{ recipe.recipe_time }}</div>
                <div> This recipe makes {{ recipe.courses_num }} servings</div>
                <div>&#128077; {{ recipe.popularity }} likes</div>
                <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
                  <label v-if="recipe.gloten" style="background-color:rgb(151, 77, 34); " >Gluten Free</label>
                  <label v-if="recipe.vegan" style="background-color:rgb(154, 218, 95); ">Vegan</label>
                  <label v-if="recipe.vegetarian" style="background-color:rgb(21, 112, 25); ">Vegeterian</label>
              </div>
                <div>This recipe is made by: {{ recipe.maker }}</div>
                <div> This recipe is made when: {{ recipe. when_making }}</div>
                <br>
                <div>
                  <p style="text-decoration-line: underline;">Ingredients:</p>
                  <ul>
                    <li v-for="i in recipe._ingridiants" :key="i.index">
                      {{ i.ingridient }}
                    </li>
                  </ul>
                </div>
              </div>
              </div>
              <div class="col" style="margin-right:30%;">
                <div class="wrapped">
                  <p style="text-decoration-line: underline;">Instructions:</p>
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
          response = await this.axios.get(
  
            this.$root.store.server_domain +"/users/returnMyFullFanilyRecipe/"+this.$route.params.recipeId,
  
            {withCredentials:true}
          );
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
          gloten,
          maker,
          when_making
        } = response.data;

        let instraction_array = instructions.split(";");
        let _instructions = []

        for(let i=0; i<instraction_array.length; i++){
          _instructions.push({index: i, step: instraction_array[i]})
        }
        
        let ingridiants_array = ingridiants.split(";");
        let _ingridiants = []
        
        for(let i=0; i<ingridiants_array.length; i++){
          _ingridiants.push({index: i, ingridient: ingridiants_array[i]})
        }
  
        let _recipe = {
            _instructions,
          _ingridiants,
          popularity,
          recipe_time,
          img,
          recipe_name,
          courses_num,
          vegan,
          vegetarian,
          gloten,
          maker, 
          when_making,
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
    width: 100%;
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
  