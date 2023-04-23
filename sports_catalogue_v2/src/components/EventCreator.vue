<template>
<div>
    <div v-if="getRouteQuery=='books'">
        <Event :optionsGiven="bookOptions" topic="livres"/>
    </div>

    <div v-if="getRouteQuery=='sports'">
        <Event :optionsGiven="sportOptions" topic="sports"/>
    </div>
</div>
</template>

<script>
 import Event from "./Event.vue"
 export default{
    name:"EventCreator",
    components:{Event},
    data(){
        return{
            bookOptions:[{name:"L'ame du mal"},{name:"Le Manuscrit Inachévé"},{name:"Au revoie de la haut"},{name:"1991"},{name:"Rever"},{name:"Sharko"},{name:"Lucca"},{name:"Les Arcanes du chaos"}],
            sportOptions:[{name:"Kitesurf"},{name:"Tennis"},{name:"Golf"},{name:"Football"},{name:"Surf"},{name:"Ski"},{name:"Snowboard"},{name:"Basketball"}]
        }
    },
    
    computed:{
        getRouteQuery(){
           
            return this.$route.query.topic
        }
    },

    async mounted(){
        console.log("the component is mounted");
        console.log(this.getRoutePath)
    }
 }
</script>
