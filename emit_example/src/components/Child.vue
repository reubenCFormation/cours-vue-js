<template>
<div>
    <h4> Hello World From Child </h4>
    <button class="btn btn-primary" @click="emitRandomNumber"> Generer Un Numero Aleatoire </button>
</div>
</template>

<script>


export default{
    name:"Child",
    data(){
       return{
        range:100
       }
    },

    methods:{
        emitRandomNumber(){
            /*
                ici, on envoie des informations au parent, on appelera l'evenment "setRandomNumber" et on lui precisera un objet avec une clé value qui aura comme valeur un numero aleatoire
            */
            this.$emit("setRandomNumber",{value:Math.ceil(Math.random()*this.range)})
        }
    }
}
</script>
