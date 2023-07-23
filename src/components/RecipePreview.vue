<template>

  <div class="card mb-3" id="cardH" style="width:1000px;" >
    <div class="row g-0">
      <div class="col-md-4">
        <router-link
          :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
          class="recipe-preview">
            <img :src="recipe.image" id="imgH" class="img-fluid rounded-start" alt="...">
         </router-link>
      </div>
     
      <div class="col-md-8">
        <div :class=whatched1>
           
        <h4 class="card-title" style="text-align: center;"> 
          <div :title="recipe.title" class="recipe-title">
          {{ recipe.title }}
          </div></h4>
          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
            <div>&#9201; {{ recipe.readyInMinutes }} minutes</div>
            <div>&#128077; {{ recipe.popularity }} likes</div>
          </div>

          <div id="buttonWrraper" v-if="$root.store.username">
          <b-button size="sm" class="mb-2" @click="addtofavorite">
              <b-icon v-if="favorite" icon="heart-fill" aria-hidden="true"></b-icon>
              <b-icon v-if="!favorite" icon="heart" aria-hidden="true"></b-icon>
          </b-button>
        </div> 

          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center; padding-top: 15px;">
            <label v-if="recipe.glutenFree" style="background-color:rgb(172, 101, 61); color:black;">Gluten Free</label>
            <label v-if="recipe.vegan" style="background-color:rgb(154, 218, 95); color:black;">Vegan</label>
            <label v-if="recipe.vegetarian" style="background-color:rgb(45, 133, 50); color:black;">Vegeterian</label>
          </div>


      </div> 
      </div>

    </div>
  </div>

  
</template>

<script>
export default {
  mounted() {

    this.getIfFavorite();
    this.getIfwhatched();
  },
  data() {
    return {
      txt_color:'green',
      favorite: false,
      whatched: false,
      whatched1: "notwhatched",
      glu:"src\gluten_free.jpg",
      favoritesList: []
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

  },
  methods: {
    async getIfFavorite() {
      if(this.$root.store.username)
      
      {
        try {
        const response = await this.axios.get(
          this.$root.store.server_domain +"/users/favorites",
           {withCredentials:true}
        );
        console.log("response");
        let fav=response.data;
        this.favoritesList = fav;
        fav.forEach(element => {
          if(element!=null)
          {
            if(element.id==this.recipe.id)
            {
              this.favorite=true;
            }
          }
        });
        
      } catch (error) {
        console.log(error);
      }
      }
      
    },


    async getIfwhatched() {
      if(this.$root.store.username)
      
      {
        console.log("here")
        try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/users/UserViewed", {withCredentials:true}
        );
        
        let whatc=response.data;
        whatc.forEach(element => {
          if(element!=null)
          {
            if(element==this.recipe.id)
            {
              console.log(this.recipe.title);
              this.whatched=true;
              this.whatched1="whatched"
            }
          }
        });
        
      } catch (error) {
        console.log(error);
      }
      }
      
    },

    async addtofavorite()
    {
      try {
        
        this.axios.default.withCredentials=true;
        let found = false;
        this.favoritesList.forEach(element => {
          if(element!=null)
          {
            if(element.id==this.recipe.id)
            {
              found = true;
              this.favorite=true;
            }
          }
        });
        if(!found){
        const response = await this.axios.post(
            this.$root.store.server_domain +"/users/favorites",
            {
              recipeId:this.recipe.id,
            }
          );
          this.axios.default.withCredentials=false;
        }
      }
      catch (err) {
            console.log(err.response);
            this.form.submitError = err.response.data.message;
          }
    },
  }
};
</script>

<style scoped>

.recipe-preview .recipe-body {
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  /* width: 98%; */
  height: auto;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  
}

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

/* 
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

#glu
{
  width: 80%;
}
.mb-2
{
  background-color: white;
  width: 200px; 
  text-align:center;
  color: black;
  margin-left: 20%;
}
.whatched
{
  /* color:v-bind(txt_color); */
  color:purple;
}

.notwhatched
{
  /* color:v-bind(txt_color); */
  color:black;
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
