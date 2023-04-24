<template>
    <div v-if="isCouterLessThanLimit" class="d-flex justify-content-between">
        <div v-if="errorMsg"> {{errorMsg}} </div>
        <div class="w-25">
            <button @click="incrementCounter" class="btn btn-info"> Incrementer </button>
        </div>
        <h4> {{counter}} </h4>
        <div class="w-25">
            <button @click="decrementCounter" class="btn btn-info"> Decrementer </button>
        </div>
    </div>

    <div v-else>
        <div class="text-danger text-center"> La limite est attient </div>
    </div>
</template>

<script>


export default{
    data(){
        return {
            counter:0,
            limit:15,
            errorMsg:""
        }
    },

    computed:{
        isCouterLessThanLimit(){
            return this.counter<this.limit
        },
        isCounterEqualToZero(){
            return this.counter>0;
        }
    },
    
    methods:{
        incrementCounter(){
            this.errorMsg="";
            this.counter+=1
        },

        decrementCounter(){
           if(this.isCounterEqualToZero){
            this.errorMsg=""
            this.counter-=1;
           }

           else{
            this.errorMsg="Error Occured";
           }
               
        }
    }
}
</script>
