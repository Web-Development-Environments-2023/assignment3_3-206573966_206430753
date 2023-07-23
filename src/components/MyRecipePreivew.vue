<template>

    
  <div id="cardH" class="card mb-3" style="max-width: 570px; max-height: 300px;" >
    <div class="row g-0">
      <div class="col-md-4">
        <router-link
          :to="{ name: 'MyRecipeFull', params: { recipeId: recipe.id } }"
          class="recipe-preview"
        >
          <img :src="recipe.img" id="imgH" class="img-fluid rounded-start" alt="..." style="min-height: 100%;">
         </router-link>
      </div>
     
      <div class="col-md-8">
        
        <h3 class="card-title" style="text-align: center;">      
          <div :title= recipe.recipe_name class="recipe-title">
          {{ recipe.recipe_name }}
          </div></h3>
          <br>
          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
            <div>&#9201; {{ recipe.recipe_time }} minutes</div>
            <div>&#128077; {{ recipe.popularity }} likes</div>
          </div>
          <br>
        <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
            <label v-if="recipe.gloten" style="background-color:rgb(151, 77, 34); " >Gluten Free</label>
            <label v-if="recipe.vegan" style="background-color:rgb(154, 218, 95); ">Vegan</label>
            <label v-if="recipe.vegetarian" style="background-color:rgb(21, 112, 25); ">Vegeterian</label>
        </div>
      </div> 
      </div>

    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // this.axios.get(this.recipe.img).then((i) => {
      //   this.image_load = true;
      // });
    },
    data() {
      return {
        // image_load: false,

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
  /* .recipe-preview {
    display: inline-block;
    width: 90%;
    height: 100%;
    position: relative;
    margin: 10px 10px;
  }
  .recipe-preview > .recipe-body {
    width: 100%;
    height: 200px;
    position: relative;
  }
  
  .recipe-preview .recipe-body .recipe-image {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
    display: block;
    width: 98%;
    height: auto;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
  }
  
  .recipe-preview .recipe-footer {
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  
  .recipe-preview .recipe-footer .recipe-title {
    padding: 10px 10px;
    width: 100%;
    font-size: 12pt;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  
  .recipe-preview .recipe-footer ul.recipe-overview {
    padding: 5px 10px;
    width: 100%;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
    table-layout: fixed;
    margin-bottom: 0px;
  }
  
  .recipe-preview .recipe-footer ul.recipe-overview li {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    -ms-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    width: 90px;
    display: table-cell;
    text-align: center;
  } */
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
  