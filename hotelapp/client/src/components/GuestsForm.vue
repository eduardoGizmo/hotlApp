<template lang="html">
  <form class="" id="guests-form" method="post" v-on:submit="handleSubmit">
    <label for="name">Enter name</label>
      <input type="text" id="name" v-model="name" required>
      <label for="email">Enter email</label>
      <input type="text" id="email" v-model="email" required>
      <label for="checkin">Checkin</label>
      <input type="radio" id="checkin" :value="true" v-model="checkin">yes
      <input type="radio" id="No checkin" :value="false" v-model="checkin">no
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
