<template>
  <div class="d-flex justify-content-between">
    <div class="w-25">
    <button @click="toggleDangerButton" class="btn btn-primary"> {{showDangerMessage? "Faire disparaitre le danger" :"Je veux du danger!"}} </button>
    <br/>

    <Transition name="fade">
        <button class="btn btn-danger mt-5" v-if="showDangerMessage"> Le Danger est present!</button>
    </Transition>
    </div>

     <div class="w-25">
        <button @click="toggleMessageAnimation" class="btn btn-primary"> {{showMessageAnimation? "Faire disparaitre le texte" :"Faire apparaitre le texte!"}} </button>
        <br/>

        <Transition name="bounce">
            <div v-if="showMessageAnimation" class="text-primary mt-2"> Voire ce texte bouger!</div>
        </Transition>
    </div>
   <!--
    <div class="stage">
    <div class="box bounce-1"></div>
    </div>
    -->
  </div>
    
</template>


<script>
 export default{
    data(){
        return{
            showDangerMessage:true,
            showMessageAnimation:true

        }
    },

    methods:{
        toggleDangerButton(){
            this.showDangerMessage=!this.showDangerMessage;
        },

        toggleMessageAnimation(){
            this.showMessageAnimation=!this.showMessageAnimation;
        }
    },

    mounted(){
        console.log("the component is mounted");
    }

 }
</script>

<style scoped>
    .fade-enter-active,.fade-leave-active{
        transition: opacity 5s ease;
    }

    .fade-enter-from,.fade-leave-to{
        opacity:0;
    }

    .bounce-enter-active{
        animation: bounce-in 2s;
    }

    .bounce-leave-active{
        animation: bounce-in 2s;
    }

    @keyframes bounce-in{
        0% {
            transform: translateY(0);
        }
        50%{
            transform: translateY(200px);
        }

        100%{
            transform: translateY(4);
        }
    }

    /*
    .stage {
        border-bottom: 3px solid #444;
        display: flex;
        height: 330px;
        width: 100%;
    }
    .box {
        align-self: flex-end;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        background-color: #F44336;
        height: 200px;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        width: 200px;
    }
    .bounce-1 {
        animation-name: bounce-1;
        animation-timing-function: linear;
    }
    @keyframes bounce-1 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
    }
    */
</style>
