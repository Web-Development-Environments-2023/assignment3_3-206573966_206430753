<template>
    <div>
      <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->
      
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Add new recipe"
        @show="resetModal"
        @hidden="resetModal"
        @ok="handleOk"
        size="l"
      >
        <form ref="form" @submit.stop.prevent="handleSubmit" style="width:100%">
          <b-form-group
            label="Title: "
            label-for="Title-input"
          >
            <b-form-input class="form-group col-md-12"
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
            <b-form-input class="form-group col-md-12"
              id="Preparation"
              v-model="$v.form.Preparation.$model"
              :state="validateState('Preparation')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Preparation.required">
              Preparation time is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.Preparation.required && !$v.form.Preparation.pos">
              Preparation time have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Popularity: "
            label-for="Popularity-input"
          >
            <b-form-input class="form-group col-md-12"
              id="Popularity"
              v-model="$v.form.Popularity.$model"
              :state="validateState('Popularity')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.Popularity.required">
              Popularity is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.Popularity.required && !$v.form.Popularity.pos">
              Popularity have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            label="Recipe Image (URL): "
            label-for="Image-input"
        
          >
            <b-form-input class="form-group col-md-12"
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
            label="Servings: "
            label-for="servings-input"
          >
            <b-form-input class="form-group col-md-12"
              id="servings"
              v-model="$v.form.servings.$model"
              :state="validateState('servings')"
              type="number"
              
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.servings.required">
              Servings is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback v-if="$v.form.servings.required && !$v.form.servings.pos">
              Servings have to be positive number
            </b-form-invalid-feedback>
          </b-form-group>

     
          <b-form-group
                label="Ingredients: "
                label-for="ingredients-input"
                invalid-feedback="ingredients is required"
            
              >

          <div class="form-row" v-for="(experience, index) in ing" :key="index">
            <div class="form-group col-md-4"> 
              <b-form-group>
              <b-form-input id="ingredient" @change="checkLengthIng(index)" :state="experience.state" v-model="experience.ingridient" :name="`ing[${index}][ingredient]`" type="text" class="form-control" placeholder="Ingridient" ></b-form-input>
              <b-form-invalid-feedback v-if="experience.ingridient.length==0">
                Ingredient is required
              </b-form-invalid-feedback>
            </b-form-group>
            </div>
            
            <div class="form-group col-md-4">
              <b-form-group>
              <b-form-input
                id="amount"
                v-model="experience.amount"
                :state="experience.state2" @change="validateA(index)" type="number" step="0.01" min="0.00"></b-form-input>
              <b-form-invalid-feedback v-if="!experience.amount">
                Preparation time is required
              </b-form-invalid-feedback>
            </b-form-group>
          </div>

            <div class="form-group col-md-4">
            <b-form-group>
              <b-form-select
              id="measure" :options="mesures" v-model="experience.measure" :state="experience.state1" @change="validateM(index)"></b-form-select>
              <b-form-invalid-feedback v-if="!experience.amount">
                Unit of measure is required
              </b-form-invalid-feedback>
            </b-form-group>
            </div>
          </div>

          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
          <button @click="addIng" type="button" class="btn btn-secondary">Add Ingredient</button>
          <button @click="removeIng" type="button" class="btn btn-secondary">Remove Last Ingredient</button>
          </div>
        </b-form-group>


        <b-form-group
            label="Instructions: "
            label-for="insrucrion"
            invalid-feedback="insrucrion is required"
           
          >
          <div class="form-row" v-for="(experience, index) in ins" :key="index">
            <div class="form-group col-md-12">
            <b-form-group>
              <b-form-input id="step" @change="checkLengthIns(index)" :state="experience.state" v-model="experience.step" :name="`ing[${index}][step]`" type="text" class="form-control" placeholder="New Step"></b-form-input>
              <b-form-invalid-feedback v-if="experience.step.length==0">
                Insrucrion is required
              </b-form-invalid-feedback>
            </b-form-group>
            </div>
          </div>

          <div class="form-group" style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
          <button @click="addIns" type="button" class="btn btn-secondary">Add step</button>
          <button @click="removeIns" type="button" class="btn btn-secondary">Remove Last Step</button>
          </div>
        </b-form-group>

        <div style="display:flex; flex-direction: row; justify-content: space-evenly; align-items: center">
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
        </div>

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
          ing: [{ingridient: "",amount:null, state: null, measure:null, state1: null, state2: null}],
          ins:[{step:"", state: null}],
          check: true,
          OkPressed: false,
          mesures: ["cups", "tbsp", "tsp", "ml", "l", "g", "kg", "slices", "pieces", "stick", "pinches"],

          form: {
            Title: "",
            Preparation: "",
            Popularity: "",
            Image: "",
            servings: "",
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

          Vegan: {
            integer,
            
          },
          Vegetarian: {
            integer,
            
          },
          Gluten: {
            integer,
            
          },
          step: {
            required
          },
          ingredient: {
            required
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
          this.OkPressed = true;
          this.handleSubmit()
        },
        async Addrecipe(instr,ingr) {
          console.log("hey")
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

          this.check = true
          for(let i=0; i<this.ing.length; i++){
            let answer = this.checkLengthIng(i)
            let answer1 = this.validateA(i)
            let answer2 = this.validateM(i)
            if (answer==false || answer1==false || answer2==false){
              this.check = false
            }
          }
          for(let i=0; i<this.ins.length; i++){
            let answer = this.checkLengthIns(i)
            if (answer==false){
              this.check = false
            }
          }
          console.log(this.$v.form.$anyError)
          if(this.check==false || !this.$v.form.$anyError)
          {
            return;
          }
          
          let ins_final=[];
          let ing_final=[];
          this.ins.map((x)=>ins_final.push(x["step"]));
          this.ing.map((x)=>ing_final.push(x["ingridient"] + ", " + x["amount"]+ x["measure"]));
          console.log(ing_final)
          console.log(ins_final)
          this.Addrecipe(ins_final,ing_final);
      
        },
        addIng () {
        //this function adds an ingridient to the ingridient list
        this.ing.push({ingridient: "",amount:null, state:null, measure:null, state1: null, state2: null})
        },
        addIns () {
        //this function adds an instraction to the instraction list
        this.ins.push({
        step: '', state:null})
        this.validations
        },
        removeIng () {
        //this function removes an ingridient from the ingridient list
          if(this.ing.length>1){
            this.ing.pop()
          }
        },
        removeIns () {
        //this function removes an instraction from the instraction list
          if(this.ins.length>1){
            this.ins.pop()
          }
        },
        checkLengthIng(i){
        //this function validates the ingridient field
          if(this.OkPressed){
            if(this.ing[i]["ingridient"].length>0)
            {
              this.ing[i]["state"] = true
              return true
            }
            this.ing[i]["state"] = false
            return false
          }
      }, 
      checkLengthIns(i){
          //this function validates the instraction field
          if(this.OkPressed){
            if(this.ins[i]["step"].length>0)
            {
              this.ins[i]["state"] = true
              return true
            }
            this.ins[i]["state"] = false
            return false
          }
        },
        validateM(i){
        //this function validates the mesure field
          if(this.OkPressed){
            if(this.ing[i]["measure"] != null)
            {
              this.ing[i]["state1"] = true
              return true
            }
            this.ing[i]["state1"] = false
            return false
          }
        },
        validateA(i){
        //this function validates the amount field
          if(this.OkPressed){
            if(this.ing[i]["amount"] != null)
            {
              this.ing[i]["state2"] = true
              return true
            }
            this.ing[i]["state2"] = false
            return false
          }
        }
      },
      mounted()
      {
        this.$refs['modal'].show()
      },
    }
  </script>

<style>
  .b-col{
    padding: 20px;
  }

</style>
