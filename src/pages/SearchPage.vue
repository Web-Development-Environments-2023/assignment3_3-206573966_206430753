<template>
  <div class="container">
    <h1 class="title">Search Page</h1>
    <b-form inline @submit.prevent="onSearch">
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
    <b-form-input
          id="search_text"
          placeholder="Search..."
          required
      ></b-form-input>
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

    <b-button id="popularity1" variant="primary" @click="onFillterPop">filter by popularity</b-button>
    <b-button id="time1" variant="primary" @click="onFillterTime">filter by time</b-button>
      <b-button type="submit" variant="primary">Search</b-button>
    </b-form>
    <h3 id="foind">{{ this.anooncment }}</h3>
    <b-col>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
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
    if(this.$root.store.last_string_search)
    {
      this.anooncment="last search: "+this.$root.store.last_string_search
    }
    if(this.$root.store.last_recipe_search)
    {
      this.recipes=this.$root.store.last_recipe_search
    }
    
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
          this.$root.store.set_lastViewd(search_text.value,this.recipes);
        }
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onSearch() {
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
        a=amount.value}
      if(Search_by.value!=""){
        if(Search_by.value=="Title")
        {
          f="titleMatch"
        }
        }
       
      // console.log("register method called");
      // this.$v.form.$touch();
      // if (this.$v.form.$anyError) {
      //   return;
      // }
      // console.log("register method go");
      this.Search(c,d,i,a,f,"()");
    },

    onFillterPop()
    {
      this.recipes=this.recipes.sort((x,b)=>b.popularity-x.popularity)
    },
    onFillterTime()
    {
      this.recipes=this.recipes.sort((x,b)=>b.readyInMinutes-x.readyInMinutes)
    }
  },
};
</script>

<style>


</style>
