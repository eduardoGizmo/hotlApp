<template lang="html">
  <div id="guestsGrid">
    <div id="guest" v-for="guest in guests">
        <h2>{{guest.name}}</h2>
        <p>{{guest.email}}</p>
        <p>Checked in:</p>
        <p v-if="guest.checkin === true">Yes</p>
        <p v-else>No</p>
        <!-- <p v-if="checkin == false">Not Checked</p> -->
        <button v-on:click="handleDelete(guest._id)">Delete</button>
    </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'
import GuestService from '../services/GuestService.js'


export default {
  name: "guests-grid",
  props:["guests"],
  methods: {
    handleDelete(id){
      GuestService.deleteGuest(id)
      .then(response => eventBus.$emit('guest-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
