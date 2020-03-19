<template>
  <q-page class="column flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <div class="row q-mt-xl">
    
       <q-btn color="green" @click="like()" class="q-ma-md">
		    <q-icon left size="2em" name="thumb_up" /> Curtir
		</q-btn>


		<q-btn color="green" @click="dislike()" class="q-ma-md">
	      <q-icon left size="2em" name="thumb_down" /> Não Curtir 
	    </q-btn>

    </div>
    
    <div class="row q-mt-xl">
    	<div class="flex flex-center q-pa-xs">
    		<q-icon left size="2em" name="thumb_up" />
    	</div>
    	<div> Total Curtidas: {{feedback.count.like}} </div>
    </div>
    
    <div class="row">
    	<div class="flex flex-center q-pa-xs">
    		<q-icon left size="2em" name="thumb_down" />
    	</div>
    	<div> Total Não Curtidas: {{feedback.count.dislike}} </div>
    </div>
    

    <div class="row q-mt-xl">
    	<q-btn color="red" @click="back()" >
	      <q-icon left size="2em" name="exit_to_app" />Sair 
	    </q-btn>
    </div>
  </q-page>
</template>

<script>
import {
	Quasar,
	QForm,
	QInput,
	QBtn,
	QDialog
} from 'quasar'
export default {
  name: 'PageIndex',
  Components:{
  	QForm,QInput,QBtn
  },

  data(){
  	return {
  		feedback:{
  			user:{
	  			like:null,
	  			dislike:null
  			},
  			count:{
	  			like:0,
	  			dislike:0
	  		}
  		},
  		
  	}
  },
  mounted () {
    // this.$store.dispatch('loadCoins')
  },
  methods:{
  	
  	like:function(){
  		this.feedback.like = true;
  		this.feedback.dislike = false;
  		//action
  	},
  	
  	dislike:function(){
  		this.feedback.dislike = true;
  		this.feedback.like = false;
  		//action
  	},
  	
  	count:function(){
  		
  		//action
  	},

  	back:function(argument) {
  		//LOGOFF
  		this.$router.push("/");
  	}
  }
}
</script>
