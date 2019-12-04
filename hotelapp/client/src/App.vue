<template lang="html">
<div id="app">
<guests-form></guests-form>
</div>
</template>

<script>
import GuestsForm from './components/GuestsForm.vue'
import GuestService from './services/GuestService.js'
import {eventBus} from './main.js'

export default {

name: "app",
data(){
  return{
    guests: [],
  }
},
components:{
  "guests-form": GuestsForm
},
mounted(){
  this.fetchData();
},
methods: {
  fetchData(){
    GuestService.getGuests()
    .then(guests => this.guests = guests);
    }
  }
  
}
</script>

<style lang="css" scoped>
</style>
