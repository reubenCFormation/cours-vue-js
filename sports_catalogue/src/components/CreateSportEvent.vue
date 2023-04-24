 
<template>
<div>
    <!--
        Ici, on voit que on fait appel a un composant enfant,Event en lui transmettant notre tableau de events aisni que le type. Le tableau d'event et le type sont les données que on lui transmet et ce composant enfant va ensuite recevoir ces données en tant que "props"
    -->
        
  <Event :events="events" type="sportifs" />  
  <!--
    Ici, on voit avec un v-if (isAddEventAllowed). isAddEventAllowed est une properité computed qui vas nous retourner des informations sur nos etats, les valeurs computed sont ecrites comme des fonctions mais ont les traites comme des proprietes
  -->
 <div v-if="isAddEventAllowed"> 
    <h4 class="text-center"> Ajouter un autre evenment sportif </h4>
    
    <form @submit="addSportingEvent">
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
           <label class="text-center text-bold"> Quelles Sports souheterai vous jouer? </label>
        <VueMultiSelect
            v-model="selectedSports"
            :options="optionsSports"
            :multiple="true"
            placeholder="Choisir vos sports"
            label="name"
            track-by="name"
            :close-on-select="false"
            >
            
        </VueMultiSelect>
         </div>
     </div>
     <br/>
        <div class="d-flex justify-content-center">
            <button  type="submit" class="btn btn-primary w-50">Submit</button>
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
    name:"CreateSportEvent",
    components:{VueMultiSelect,Event},
    data(){
        return {
            events:[],
            title:"",
            description:"",
            date:null,
            selectedSports:[],
            optionsSports:[{name:"Tennis"},{name:"Kitesurf"},{name:"Golf"},{name:"Surf"},{name:"Football"},{name:"Basketabll"}],
            maximumAllowedEvents:5
        }
    },


    computed:{
        /*
            Ceci est notre computed auquel on fait appel plus haut dans notre template. Ce computed teste si notre tableau contient moins de 5 evenments o ou pas. Si il contient moins de 5 evenments, il va retourner true. Sinon il va retourner false
        */
        isAddEventAllowed(){
            console.log("Computed being called")
            return this.events.length<this.maximumAllowedEvents;
        },

        
    },

    methods:{
        addSportingEvent(event){
            event.preventDefault();
            const eventsCopy=this.events;
            eventsCopy.push({title:this.title,description:this.description,activites:this.selectedSports,date:this.date});
            this.events=eventsCopy;
            this.clearData();
        },

        clearData(){
            this.title="";
            this.description="";
            this.date=null;
            this.selectedSports=[];
        }
    }

    

}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style scoped>
    .text-bold{
        font-weight:bold;
    }
</style>
