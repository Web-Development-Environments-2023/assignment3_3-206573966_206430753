<template>

  <div class="card" style="width: 18rem;">
    <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  >
    <!-- <img v-if="image_load" :src="recipe.image" class="card-img-top" alt="..."> -->
    <img :src="recipe.image" class="card-img-top" alt="...">

  </router-link>
    <div class="card-body">
      <h5 class="card-title">      
        <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
        </div></h5>
      <p class="card-text">
        <ul>
          <li>{{ recipe.readyInMinutes }} minutes</li>
          <li>{{ recipe.popularity }} likes</li>
          <li> vegan: {{ recipe.vegan }}</li>
          <li> vegetarian: {{ recipe.vegetarian }}</li>
          <li> glutenFree: {{ recipe.glutenFree }}</li>
          <li v-if="favorite"> favorite</li>
          <li v-if="whatched"> whatched</li>

        </ul>
      </p>
    </div> 
    <b-button size="sm" class="mb-2" @click="addtofavorite">
            <b-icon icon="heart" aria-hidden="true"></b-icon>
  </b-button>  
  </div>

  
</template>

<script>
export default {
  mounted() {
    // this.axios.get(this.recipe.image).then((i) => {
    //   this.image_load = true;
    // });
    this.getIfFavorite();
    this.getIfwhatched();
  },
  data() {
    return {
      // image_load: false,
      favorite: false,
      whatched: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }

    // id: {
    //   type: Number,
    //   required: true
    // },
    // title: {
    //   type: String,
    //   required: true
    // },
    // readyInMinutes: {
    //   type: Number,
    //   required: true
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // aggregateLikes: {
    //   type: Number,
    //   required: false,
    //   default() {
    //     return undefined;
    //   }
    // }
  },
  methods: {
    async getIfFavorite() {
      if(this.$root.store.username)
      
      // if(!this.$cookies.get("session"))
      {
        console.log("here")
        try {
        const response = await this.axios.get(
          // this.$root.store.server_domain + "/recipes/random",
          "http://127.0.0.1:3000/users/favorites", {withCredentials:true}
        );
        console.log("response");
        let fav=response.data;
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
      
      // if(!this.$cookies.get("session"))
      {
        console.log("here")
        try {
        const response = await this.axios.get(
          // this.$root.store.server_domain + "/recipes/random",
          "http://127.0.0.1:3000/users/UserViewed", {withCredentials:true}
        );
        
        let whatc=response.data;
        whatc.forEach(element => {
          if(element!=null)
          {
            if(element==this.recipe.id)
            {
              console.log(this.recipe.title);
              this.whatched=true;
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
        const response = await this.axios.post(
            this.$root.store.server_domain +"/users/favorites",
            {
              recipeId:this.recipe.id,
            }
          );
          this.axios.default.withCredentials=false;
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
.recipe-preview {
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
}
</style>
