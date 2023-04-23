<template>
<div class="w-100">
    <h2 class="text-center text-info"> Annuaire d'evenments {{this.type}}  </h2>
   <div v-if="isEventsExists">
    <table class="table table-striped">
        <thead>
            <th class="text-center"> Titre </th>
            <th class="text-center"> Description</th>
            <th class="text-center"> {{this.type}} inclus</th>
            <th class="text-center"> Date </th>
        </thead> 
        <tbody>
            <tr v-for="event in events" :key="event">
                <td class="text-center"> {{event.title}} </td>
                <td class="text-center"> {{event.description}} </td>
                <td class="text-center"> <ul> <li v-for="activity in event.activites" :key="activity"> {{activity.name}} </li> </ul> </td>
                <td class="text-center"> {{event.date}} </td>
            </tr>
        </tbody>

    </table> 
   </div>

   <div v-else> <h4 class="text-warning text-center"> Aucun evenment actuellement </h4> </div>
    
</div>
    
</template>


<script>
 export default{
    name:"Event",

    props:{
        events:Object,
        type:String
       
    },
    computed:{
        isEventsExists(){
            return this.events.length>0
        }
    }
 }


</script>
