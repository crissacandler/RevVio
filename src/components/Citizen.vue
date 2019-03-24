<template>
  <v-container class="container">
    <Header/>>
    <v-icon color="#006686">fa-align-left</v-icon>
    <div class="format">
    <div class="prompt">Citizen</div>
    <v-icon color="#00666C">fa-location-arrow</v-icon>
    <div class="uppercase">Address</div>
    <div class="number bluish">{{number}}</div>
    <div class="subPrompt bluish">{{street}}</div>
    <div class="zipcode">{{zipcode}}</div>
    <v-icon color="#00666C">fa-building</v-icon>
    <div class="uppercase">Neighborhood</div>
    <v-icon color="#00666C">fa-user</v-icon>
    <div class="uppercase">Citizens</div>
    <div>{{adultNumber}}</div>
    <div class="zipcode">Adults</div>
    <div>{{childNumber}}</div>
    <div class="zipcode">Children</div>



    <div class="btn-divider">
    <v-btn class="clear-btn" round @click="btnAction">Confirm</v-btn> 
    <v-btn class="blue-btn" round @click="btnAction">Confirm</v-btn> 
    </div>
    </div>
  </v-container>
</template>

<script>
import Header from './Header.vue'

  export default {
    name: 'citizen',
    components:{
      Header
    },
    data(){
      return{
        number:'518',
        street:'Boylston Street',
        city:'Boston',
        zipcode:'40325',
        status:'5',
        adultNumber:1,
        childNumber: 2

      }
    },
    methods:{
      btnAction(){
        this.$router.push({name: 'status'})
      }
    }
  }
</script>

<style scss scoped>


</style>