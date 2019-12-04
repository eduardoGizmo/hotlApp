<template lang="html">
  <form class="" id="guests-form" method="post" v-on:submit="handleSubmit">
    <label for="name">Enter name</label>
      <input type="text" id="name" v-model="name">
      <label for="email">Enter email</label>
      <input type="text" id="email" v-model="email">
      <label for="checkin">Checkin</label>
      <input type="radio" id="checkin" v-model="checkin">
      <input type="submit" id="save" value="save">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
import GuestService from '../services/GuestService.js'

export default {
  name: "guests-form",
  data(){
    return {
      name: "",
      email: "",
      checkin: false
    }
  },
  methods: {
      handleSubmit(event){
        event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checkin: this.checkin
      };

      GuestService.postGuest(payload)
      .then(guest => { eventBus.$emit('guest-added', guest)  });

    }
  }
}
</script>

<style lang="css" scoped>
</style>
