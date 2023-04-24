<template>
   <div v-if="showMessageWritten">
    
     <h4> {{message}} </h4>
  </div>
    <form @submit="sendMessage">
  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <input type="text" class="form-control" placeholder="Enter message" v-model="message">
    
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <div>
    <br/>
  <button @click="hideMessage" class="btn btn-primary" v-if="showMessageWritten"> Cacher Mon Message </button>
  </div>
</form>
 <br/>

  
</template>

<script>
 export default{
    data(){
        return{
           message:"",
           showMessageWritten:false,
           
        }
    },
    methods:{
        sendMessage(event){
            event.preventDefault();
            this.showMessageWritten=true;
            
        },

        hideMessage(){
            this.showMessageWritten=false;
        }
    }
 }
</script>
