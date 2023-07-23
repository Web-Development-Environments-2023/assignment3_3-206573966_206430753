<template>
  <div class="container">
    <br>
    <br>
    <b-form inline @submit.prevent="onSearch">
      <div class="input-group col-md-10">
      <b-form-input
          id="search_text"
          placeholder="Search..."
          required
      ></b-form-input>
      <div class="input-group-append">
        <button type="submit" class="btn btn-outline-secondary"><b-icon icon="search" aria-hidden="true"></b-icon></button>
      </div>
    </div>
    <div>
      <label>optional: </label>
      <b-form-select
      id="Cuisine"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Choose Cuisine', value: null }, 'African','Asian','American','British','Cajun','Caribbean','Chinese','Eastern European','European','French','German','Greek','Indian','Irish','Italian','Japanese','Jewish','Korean','Latin American','Mediterranean','Mexican','Middle Eastern','Nordic','Southern','Spanish','Thai','Vietnamese']"
      :value="null"
    ></b-form-select>
    <b-form-select
      id="Diet"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Choose Diet', value: null }, 'Gluten Free','Ketogenic','Vegetarian','Lacto-Vegetarian','Ovo-Vegetarian','Vegan','Pescetarian','Paleo','Primal','Low FODMAP','Whole30']"
      :value="null"
    ></b-form-select>
    <b-form-select
      id="Intolerance"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Choose Intolerance', value: null }, 'Dairy','Egg','Gluten','Grain','Peanut','Seafood','Sesame','Shellfish','Soy','Sulfite','Tree Nut','Wheat']"
      :value="null"
    ></b-form-select>

      <b-form-select
      id="amount"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Search result amount', value: null },5,10,15]"
      :value="null"
    ></b-form-select>
    <b-form-select
      id="Search_by"
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="[{ text: 'Search by', value: null },'Food Type','Title']"
      :value="null"
    ></b-form-select>
  </div>
  <div>
  </div>      <!-- <b-button type="submit" variant="primary">Search</b-button> -->
    </b-form>
    <br>
    <div style="margin-left:25%;">
      <button id="popularity1"  @click="onFillterPop" style="margin-right:3%;">filter by popularity</button>
      <button id="time1"  @click="onFillterTime">filter by time</button>
    </div>
    <br>
    <h3 id="foind" style="margin-left:28%;">{{ this.anooncment }}</h3>
    <b-col>
      <div class="a">
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
    </div>
    </b-col>
  </div>
</template>
<script>
import RecipePreview from "../components/RecipePreview";
export default {
  name: "Search",
  components: {
    RecipePreview
  },
  mounted() {
    if(this.$root.store.last_search_text)
    {
      // this.anooncment="last search: "+this.$root.store.last_string_search
      console.log("i'm here");
      this.Search1();
    }
    // if(this.$root.store.last_recipe_search)
    // {
    //   this.recipes=this.$root.store.last_recipe_search
    // }
    
  },
  data() {
    return {
      form: {
        Cuisine: null,
        Diet: null,
        Intolerance: null,
        amount: 5,
        Search_by: "query",
        search_text:"",
        Fillter:"",
        
        submitError: undefined
      },
      anooncment:"",
      recipes: []
    }
  },
  methods: {
    async Search(c,d,i,a,f,s) {
      //this fumction make the search according to the parametrs that recived and return the search result, parametres send in the url
      try {
        const response = await this.axios.get(
          // "http://127.0.0.1:3000/Register",
          this.$root.store.server_domain + "/recipes/search/"+f+"="+search_text.value+"&number="+a+"&cuisine="+c+"&diet="+d+"&intolerances="+i+"&sort="+s,
          {withCredentials:true}
        );
        this.anooncment="";
        const ans=response.data;
        console.log(ans)
        this.recipes = [];
        this.recipes.push(...ans);
        if(this.recipes.length==0)
        {
          this.anooncment="No matching search result found"
        }
        else
        {
          this.$root.store.set_lastSearch(search_text.value,a,c,d,i,s,f)
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onSearch() {
      // this function handle and manage the search 
      let c="()"
      let d="()"
      let i="()"
      let a=5
      let f="query"
      if(Cuisine.value!=""){
        c=Cuisine.value}
      if(Diet.value!=""){
        d=Diet.value}
      if(Intolerance.value!=""){
        i=Intolerance.value}
      if(amount.value!=""){
        a=amount.value
      }
      if(Search_by.value!=""){
        if(Search_by.value=="Title")
        {
          f="titleMatch"
        }
        }
      this.Search(c,d,i,a,f,"()");
    },

    onFillterPop()
    {
      // this function fillter the result according to recipe popularity
      this.recipes=this.recipes.sort((x,b)=>b.popularity-x.popularity)
    },
    onFillterTime()
    {
        // this function fillter the result according to recipe making time
      this.recipes=this.recipes.sort((x,b)=>b.readyInMinutes-x.readyInMinutes)
    },
    async Search1() {
      console.log("search1");
      let search_text = this.$root.store.last_search_text
      let c = this.$root.store.last_search_cuisine
      let d = this.$root.store.last_search_diet
      let i = this.$root.store.last_search_intolerance
      let a = this.$root.store.last_search_amount
      let f = this.$root.store.last_search_filter
      let s = this.$root.store.last_search_search_by
      console.log(search_text)

      try {
        console.log(this.$root.store.server_domain + "/recipes/search/"+f+"="+search_text+"&number="+a+"&cuisine="+c+"&diet="+d+"&intolerances="+i+"&sort="+s)
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/search/"+f+"="+search_text+"&number="+a+"&cuisine="+c+"&diet="+d+"&intolerances="+i+"&sort="+s,
          {withCredentials:true}
        );
        this.anooncment="";
        const ans=response.data;
        console.log(ans)
        this.recipes = [];
        this.recipes.push(...ans);
        if(this.recipes.length==0)
        {
          this.anooncment="No matching search result found"
        }
        else
        {
          this.anooncment = "last search: "+this.$root.store.last_search_text
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    }
  },
};
</script>

<style>
/* #search_text
{
  margin-left: 100%;
  size:'lg';
} */

.a{
  width: 400px;
  margin-left: 20%;
}

</style>
