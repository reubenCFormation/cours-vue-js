<script setup>
 import CreateSportEvent from "./components/CreateSportEvent.vue"
 import CreateBookEvent from "./components/CreateSportEvent.vue"

 
</script>

<template>
   <div> 
    
      <h2 class="text-center"> Mes Activités </h2>
     
   <div class="d-flex justify-content-between">
      <button @click="$router.push('/event/sports')" class="btn btn-primary"> Annuaire activités sportifs </button>
      <button @click="$router.push('/event/books')" class="btn btn-primary"> Annuaire activités lecture  </button>
    </div>
    <router-view> </router-view>
  </div>
  
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
