<template>
  <v-container class="container">
    <header></header>
    <v-icon color="#006686">fa-align-left</v-icon>
    <!-- <div class="format"> -->
    <div class="prompt">Your Queue</div>
    <v-card class="mycard">
      <div class="information"> 
      <div class="number">{{number}}</div>
      <div class="subPrompt">{{street}}</div>
      <div class="zipcode">{{city}}{{zipcode}}</div>
      </div>
      <div class="status">{{status}}</div>
    </v-card>
    <div class="backCard"></div>
    <div class="btn-divider">
    <v-btn class="gray-btn" round @click="btnAction">Confirm</v-btn> 
    </div>
    <!-- </div> -->
  </v-container>
</template>

<script>
import Header from '../components/Header.vue'

  export default {
    name: 'current-citizen',
    components:{
      Header    
    },
    data(){
      return{
        number:'518',
        street:'Boylston Street',
        city:'Boston',
        zipcode:'40325',
        status:'5'
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
.information{
  align-content: left;

}


.status{
flex-direction: row-reverse;

font-size: 28px;

  color: #C92637;
}

.myCard{
  flex-flow: row wrap;
  padding:33px;
  background: green;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.48);
  border-radius: 5px;
  padding:5px !important;
  min-width:315px !important;
  min-height:190px !important;
  z-index:10;
}
.backCard{
 background: #D60000;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.48);
  border-radius: 5px;
  min-height:190px !important;
  min-width:350px !important;
  z-index: 0 ;
}
.container{
  color: #FFFFFF;
}
</style>