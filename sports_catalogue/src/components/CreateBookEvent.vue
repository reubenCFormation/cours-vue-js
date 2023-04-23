 
<template>
<div>
        
  <Event :events="events" type="Lecture"/>     
 <div v-if="isAddEventAllowed"> 
    <h4 class="text-center"> Ajouter un autre evenment sportif </h4>
   
    
    <form>
    <div class="d-flex justify-content-between">
     <div class="form-group">
            <label class="text-center text-bold" >Titre de l'evenment</label>
            <input class="form-control" type="text" v-model="title">
    
    </div>
         <br/>

          <div class="form-group">
            <label class="text-center text-bold">Description de l'evenment</label>
            <textarea class="form-control" cols="25" rows="10" v-model="description"></textarea>
        </div>
        <br/>
    

        <div class="form-group">
            <label class="text-center text-bold" >Date de l'evenment </label>
            <input class="form-control" type="date" v-model="date">
        </div>
        <br/>

      

         <div class="form-group">
           <label class="text-center text-bold"> Quelles livres souheterai vous discuter? </label>
        <VueMultiSelect
            v-model="selectedBooks"
            :options="optionsBooks"
            :multiple="true"
            placeholder="Choisir vos livres"
            label="name"
            track-by="name"
            :close-on-select="false"
            >
            
        </VueMultiSelect>
         </div>
     </div>
     <br/>
        <div class="d-flex justify-content-center">
            <button @click="addSportingEvent" type="submit" class="btn btn-primary w-50">Submit</button>
        </div>
    </form> 
 
</div>

<div v-else>
    <h4 class="text-danger text-center"> La limité d'evenments est attient </h4>
</div>

</div>

        
    
</template>

<script>

import  VueMultiSelect from 'vue-multiselect';
import Event from "./Event.vue"
export default {
    name:"CreateBookEvent",
    components:{VueMultiSelect,Event},
    data(){
        return {
            events:[],
            title:"",
            description:"",
            date:null,
            selectedBooks:[],
            optionsBooks:[{name:"Au revoir de la haut"},{name:"1991"},{name:"L'ame du mal"},{name:"Rever"},{name:"Glacé"},{name:"Le Manuscrit Inachevé"}],
            maximumAllowedEvents:5
        }
    },


    computed:{
        isAddEventAllowed(){
            console.log("Computed being called")
            return this.events.length<this.maximumAllowedEvents;
        },

        isEventsExists(){
            return this.events.length>0
        },
    },

    methods:{
        addSportingEvent(event){
            event.preventDefault();
            const eventsCopy=[...this.events];
            eventsCopy.push({title:this.title,description:this.description,activites:this.selectedSports,date:this.date});
            this.events=eventsCopy;
            this.clearData();
        },

        clearData(){
            this.title="";
            this.description="";
            this.date=null;
            this.selectedBooks=[];
        },
       
    }

    

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
    .text-bold{
        font-weight:bold;
    }
</style>
