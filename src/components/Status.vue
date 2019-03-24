<template>
  <v-container class="container">
    <v-icon color="#006686">fa-align-left</v-icon>
    <div class="format">
    <div class="prompt">Please confirm your status</div>
    <div class="btn-divider">
    <v-btn class="gray-btn" round @click="btnAction">Confirm</v-btn> 
    </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'need',
    methods:{
      btnAction(){
        this.$router.push({name: 'status'})
      }
    }
  }
</script>

<style scss scoped>

.container{
  color: #FFFFFF;
}
</style>
