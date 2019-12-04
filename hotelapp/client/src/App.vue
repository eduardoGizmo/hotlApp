<template lang="html">
  <div id="app">
    <guests-form />
    <guests-grid :guests="guests" />
  </div>
</template>

<script>
import GuestsForm from './components/GuestsForm.vue'
import GuestsGrid from './components/GuestsGrid.vue'
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
  "guests-form": GuestsForm,
  "guests-grid": GuestsGrid
},
mounted(){
  this.fetchData();

  eventBus.$on('guest-added', guest => this.guests.push(guest));

  eventBus.$on('guest-deleted', id => {
  const index = this.guests.findIndex( guest => guest._id === id );
  this.guests.splice(index, 1);
})

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
