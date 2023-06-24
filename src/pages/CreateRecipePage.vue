<template>
    <div>
      <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>

  
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Add new recipe"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="Title: "
            label-for="Title-input"
          >
            <b-form-input
              id="Title"
              v-model="$v.form.Title.$model"
              type="text"
              :state="validateState('Title')"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Title.required">
              Title is required
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Preparation Time (in minuts): "
            label-for="Preparation-input"
          >
            <b-form-input
              id="Preparation"
              v-model="$v.form.Preparation.$model"
              :state="validateState('Preparation')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Preparation.required">
              Preparation is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.Preparation.required && !$v.form.Preparation.pos">
              Have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Popularity: "
            label-for="Popularity-input"
          >
            <b-form-input
              id="Popularity"
              v-model="$v.form.Popularity.$model"
              :state="validateState('Popularity')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Popularity.required">
              Popularity is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.Popularity.required && !$v.form.Popularity.pos">
              Have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Recipe Image: "
            label-for="Image-input"
        
          >
            <b-form-input
              id="Image"
              v-model="$v.form.Image.$model"
              :state="validateState('Image')"
              type="url"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Image.required">
              Image is required
            </b-form-invalid-feedback>
          </b-form-group>



          <b-form-group
            label="servings: "
            label-for="servings-input"
          >
            <b-form-input
              id="servings"
              v-model="$v.form.servings.$model"
              :state="validateState('servings')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.servings.required">
              servings is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.servings.required && !$v.form.servings.pos">
              Have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>
             
          <b-form-group
                label="ingredients: "
                label-for="ingredients-input"
                invalid-feedback="ingredients is required"
            
              >

          <div class="form-row" v-for="(experience, index) in ing" :key="index">
            <div class="form-group col-md-6">
              <label>ingredient</label>
 
              <b-form-input id="ingredient" v-model="experience.ingredient" :name="`ing[${index}][ingredient]`" type="text" class="form-control" placeholder="ingredient" ></b-form-input>
              <!-- <b-form-invalid-feedback v-if="$v.form.ingredient.required">
                ingredient is required
              </b-form-invalid-feedback> -->
            </div>
            <div class="form-group col-md-6">
              <label>amount</label>
              <b-form-input id="amount" v-model="experience.amount" :name="`ing[${index}][amount]`" type="text" class="form-control" placeholder="amount" ></b-form-input>
              <!-- <b-form-invalid-feedback v-if="$v.form.amount.required">
                amount is required
              </b-form-invalid-feedback> -->
            </div>
          </div>

          <div class="form-group">
          <button @click="addIng" type="button" class="btn btn-secondary">Add ingredients</button>
          <button @click="removeIng" type="button" class="btn btn-secondary">Remove last ingredient</button>
          </div>
        </b-form-group>


        <b-form-group
            label="insrucrion: "
            label-for="insrucrion"
            invalid-feedback="insrucrion is required"
           
          >
          <div class="form-row" v-for="(experience, index) in ins" :key="index">
            <div class="form-group col-md-6">
              <label>stpe</label>
              <input v-model="experience.step" :name="`ing[${index}][step]`" type="text" class="form-control" placeholder="step">
            </div>
          </div>

          <div class="form-group">
          <button @click="addIns" type="button" class="btn btn-secondary">Add step</button>
          <button @click="removeIns" type="button" class="btn btn-secondary">Remove last step</button>
          </div>
        </b-form-group>



          <b-form-checkbox
            id="Vegan"
            v-model="$v.form.Vegan.$model"
            name="Vegan"
            value=1
            unchecked-value=0
            :state="validateState('Vegan')"
          >
            Vegan
          </b-form-checkbox>

          <b-form-checkbox
            id="Vegetarian"
            v-model="$v.form.Vegetarian.$model"
            name="Vegetarian"
            value=1
            unchecked-value=0
            :state="validateState('Vegetarian')"
          >
          Vegetarian
          </b-form-checkbox>

          <b-form-checkbox
            id="Gluten"
            v-model="$v.form.Gluten.$model"
            name="Gluten"
            value=1
            unchecked-value=0
            :state="validateState('Gluten')"
          >
          Gluten
          </b-form-checkbox>



        </form>
      </b-modal>
    </div>
  </template>
  
  <script>
  import {
    required,
    integer
  } from "vuelidate/lib/validators";
    export default {

      data() {
        return {
          name: '',
          nameState: null,
          submittedNames: [],
          ing: [{ingredient: "",amount:""}],
          ins:[{step:""}],

          form: {
            Title: "",
            Preparation: 1,
            Popularity: 0,
            Image: "",
            servings: 0,
            // insrucrion: [],
            // insrucrion: [],
            // ingredient:"",
            // amount:"",
            Vegan: 0,
            Vegetarian:0,
            Gluten:0
          },
        }
      },
      validations: {
        form: {
          Title: {
            required,
          },
          Preparation:{
            pos: (u) => u>0,
            integer,
            required
          },
          Popularity:{
            pos: (u) => u>0,
            required
          },
          Image: {
            required
          },
          servings: {
            pos: (u) => u>0,
            required
          },
          // amount:{
          //   required
          // },
          // ingredient:{
          //   required
          // },
          Vegan: {
            integer,
            
          },
          Vegetarian: {
            integer,
            
          },
          Gluten: {
            integer,
            
          },
        }
    },
      methods: {
        validateState(param) {
          const { $dirty, $error } = this.$v.form[param];
          return $dirty ? !$error : null;
      },

        resetModal() {
          this.name = ''
          this.nameState = null
        },
        handleOk(bvModalEvent) {
          // Prevent modal from closing
          bvModalEvent.preventDefault()
          // Trigger submit handler
          this.handleSubmit()
        },
        async Addrecipe(instr,ingr) {
          try {
            const response = await this.axios.post(
              this.$root.store.server_domain + "/users/addRecipe",
              {
                title: this.form.Title,
                img: this.form.Image,
                time: this.form.Preparation,
                popularity: this.form.Popularity,
                vegan: this.form.Vegan,
                vegetarian: this.form.Vegetarian,
                glutenFree: this.form.Gluten,
                extendedIngredients: ingr,
                analyzedInstructions: instr,
                servings:this.form.servings
              },
              {withCredentials:true}
            );
            console.log("here");
            this.$router.push("/MyRecipe");
            // console.log(response);
          } catch (err) {
            console.log(err.response);
            this.form.submitError = err.response.data.message;
          }
        },
        handleSubmit() {
       
          this.$v.form.$touch();
          if (this.$v.form.$anyError) {
            return;
          }



          let ins_final=[];
          let ing_final=[];
          this.ins.map((x)=>ins_final.push(x["step"]));
          this.ing.map((x)=>ing_final.push(x["amount"]+" "+x["ingredient"]));
          console.log(ing_final)
          console.log(ins_final)
          this.Addrecipe(ins_final,ing_final);
      
        },
        addIng () {
        this.ing.push({
        ingredient: '',
        amount: ''})
        },
        addIns () {
        this.ins.push({
        step: ''})
        },
        removeIng () {
        this.ing.pop()
        },
        removeIns () {
        this.ins.pop()
        },
        
      }
    }
  </script>

<style>
</style>
