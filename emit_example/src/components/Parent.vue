<template>
<div>
    <!--
        Ici, on fait appel au composant enfant, et l'enfant va transmettre le numero que il a generé au parent dans la fonction generateRandomNumber
    -->
    <Child @setRandomNumber="generateRandomNumber"/>
    <h4 class="text-info"> Le Nombre aleatoire est {{randomNumber.value}} </h4>
</div>
    
</template>

<script>
 import Child from "./Child.vue";
 export default{
    name:"Parent",
    components:{Child},
    data(){
        return{
            randomNumber:0
        }
    },

    methods:{
        /*
            Ici, on arrive a recuperer le numero que l'enfant a envoyé au parent via le parametre que j'apelle childNumber. On pourra ensuite mettre a jout notre etat de randomNumber
        */
        generateRandomNumber(childNumber){
            this.randomNumber=childNumber;
        }
    }
 }
</script>
