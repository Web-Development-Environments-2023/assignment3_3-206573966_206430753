<template>
    
  <div id="cardH" class="card mb-3" style="max-width: 570px; max-height: 300px;" >
    <div class="row g-0">
      <div class="col-md-4">
         <router-link
      :to="{ name: 'MyFamilyRecipeFull', params: { recipeId: recipe.id } }"
      class="recipe-preview"
    >
          <img :src="recipe.img" id="imgH" class="img-fluid rounded-start" alt="..." >
         </router-link>
      </div>
     
      <div class="col-md-8">
        
        <h3 class="card-title" style="text-align: center;">      
          <div :title= recipe.recipe_name class="recipe-title">
          {{ recipe.recipe_name }}
          </div></h3>
          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
            <div>&#9201; {{ recipe. recipe_time }} </div>
            <div>&#128077; {{ recipe.popularity }} likes</div>
          </div>
        
          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center; padding-top: 15px;">
            <label v-if="recipe.glutenFree" style="background-color:rgb(172, 101, 61); color:black;">Gluten Free</label>
            <label v-if="recipe.vegan" style="background-color:rgb(154, 218, 95); color:black;">Vegan</label>
            <label v-if="recipe.vegetarian" style="background-color:rgb(45, 133, 50); color:black;">Vegeterian</label>
          </div>
 
      </div> 
      </div>

    </div>
</template>
  
  <script>
  export default {
   
    data() {
      return {
      };
    },
    props: {
      recipe: {
        type: Object,
        required: true
      }
  
    },
    
  };
  </script>
  
  <style scoped>
 
  #imgH:hover {
  opacity: 0.7;
}

#cardH
  {
    border-style: solid;
    border-color: black;
    width: 700px; 
    height: 200px;
  }

  #imgH{
    height: 198px;
    width: 200px;
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
  